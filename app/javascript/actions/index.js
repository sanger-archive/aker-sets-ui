import jwt_decode from "jwt-decode"
import { setHeader, readEndpoint, createResource } from "redux-json-api"
import queryMaterialBuilder from '../lib/query_builder'
import { handleMaterialsServiceErrors, handleSetsServiceErrors, handleStampsServiceErrors } from '../lib/service_errors';
import { startCreateSet, stopCreateSet, startAddMaterialsToSet, stopAddMaterialsToSet,
  startRemoveMaterialsFromSet, stopRemoveMaterialsFromSet, startStamping, stopStamping } from './loading';
import { receiveMaterialSchema, receiveSearchResults } from './search';
import { validateNewSetName } from '../lib/utils';
import qs from 'qs';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const setUserEmail = (userEmail) => {
  return {
    type: SET_USER_EMAIL,
    userEmail
  }
}

export const appendMaterialsToSet = function(materials, set) {
  return function(dispatch) {
    return $.ajax({
      method: 'POST',
      url: encodeURI(`${SET_SERVICE_API}/sets/${set.id}/relationships/materials`),
      accept: 'application/vnd.api+json',
      contentType: 'application/vnd.api+json',
      data: JSON.stringify(
        {
          data: materials.map(
            (material) => {
              return { id: material._id, type: 'materials'};
            }
          )
        }
      )
    }
    ).then(() => {
      return dispatch(readEndpoint(`sets/${set.id}`))
    }, (error) => {
      if (error.status == 403) {
        return dispatch(userMessage('You do not have permission to add materials to this set', 'danger'));
      }
    });
  }
}

export const fetchMaterialSchema = () => {
  return (dispatch, getState) => {
    return $.ajax({
      method: 'GET',
      url: `${MATERIAL_SERVICE}/materials/schema`,
      accept: "application/json",
    })

    .then((response) => {
      return dispatch(receiveMaterialSchema(response));
    }, (error) => { return dispatch(handleMaterialsServiceErrors(error))});
  }
}

export const USER_MESSAGE = "USER_MESSAGE";
export const userMessage = (message, msgType) => {
  return { type: USER_MESSAGE, message, msgType};
};

export const STAMPS_INITIALIZATION = "STAMPS_INITIALIZATION";
export const FETCH_ALL_STAMPS = "FETCH_ALL_STAMPS";
export const fetchAllStamps = () => {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ALL_STAMPS });

    return $.ajax({
      method: 'GET',
      url: `${STAMP_SERVICE_API}/stamps`,
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json"
    }).then((response) => {
      return dispatch(receiveAllStamps(response));
    }, (error) => {
      if (error.status == 404) {
        return dispatch(userMessage('Failed to obtain the stamps available. The stamps service might not be running. Please contact the administrators', 'danger'));
      }
      return dispatch(handleStampsServiceErrors(error));
    });
  }
}

export const RECEIVE_ALL_STAMPS = "RECEIVE_ALL_STAMPS";
export const RECEIVE_EMPTY_RESULTS = "RECEIVE_EMPTY_RESULTS";
export const RECEIVE_EMPTY_STAMPS = "RECEIVE_EMPTY_STAMPS";
export const receiveAllStamps = (response) => {
  return (dispatch, getState) => {
    let state = getState();
    let stamps = $.map(response.data, val => val );

    let status = RECEIVE_ALL_STAMPS;
    if (stamps.length == 0) {
      status = RECEIVE_EMPTY_STAMPS;
    }

    return(dispatch({
      type: RECEIVE_ALL_STAMPS,
      stamps,
      status: status
    }));
  }
}

export const fetchSetMaterialsIfNeeded = (setFilters) => {
  return filterSearch(setFilters, performSetFilterSearch);
}

export const fetchStampsIfNeeded = (stampFilters) => {
  return filterSearch(stampFilters, performStampFilterSearch)
}

// Dispatchs an action on each item in a list of filters
const filterSearch = (filters, action) => {
  return (dispatch) => {
    const filtersDeferred = filters.map((filter) => { return dispatch(action(filter)) });

    if (filtersDeferred.length > 0) {
      return $.when.apply(null, filtersDeferred);
    }
    return $.Deferred().resolve([]);
  }
}

export const performSearchToPage = (page, maxResults, sortBy, order) => {
  return (dispatch, getState) => {
    // remove user messages if there are any showing
    dispatch(userMessage(''));
    return dispatch(fetchPageForSearch({ page, maxResults, sortBy, order })).then((response) => {
        return dispatch(receiveSearchResults(response));
      }, (error) => {
        return dispatch(handleMaterialsServiceErrors(error));
      });
  }
};

export const fetchPageForSearch = (params) => {
  return (dispatch, getState) => {
    const filters = getState().search.current;
    const setFilters = filters.filter(filter => filter.name == 'setMembership');
    const stampFilters = filters.filter(filter => filter.name == 'consumePermission' || filter.name == 'editPermission');
    return dispatch(fetchMaterials({ ...params, filters, setFilters, stampFilters }));
  }
}

export const fetchPageForSimple = (params) => {
  return (dispatch) => {
    const filters = [];
    const setId = params['setId'];
    const setFilters = [{ name: 'setId', type: 'string', comparator: 'is', value: setId }];
    delete params['setId'];

    if (params.search) {
      params = qs.parse(params.search, { ignoreQueryPrefix: true });
      delete params['search'];
    }

    dispatch(readEndpoint(`sets/${setId}`));

    return dispatch(fetchMaterials({ ...params, setFilters, maxResults: 25 }));
  }
}

const fetchPageFor = (key) => {
  return (params) => {
    return (dispatch) => {
      return dispatch(fetchPageForSimple(params))
        .then((response) => dispatch(receiveMaterials(key, response)))
    }
  }
}

export const fetchPageForTop = fetchPageFor('top');
export const fetchPageForBottom = fetchPageFor('bottom');

const fetchMaterials = ({
  page = 1,
  maxResults = 50,
  sortBy = '_id',
  order = 1,
  filters = [],
  setFilters = [],  // Necessary cause of our wacky APIs :s
  stampFilters = []
  } = {}) => {
  return (dispatch) => {
    const url = `${MATERIAL_SERVICE}/materials/search`;

    return $.when(dispatch(fetchSetMaterialsIfNeeded(setFilters)), dispatch(fetchStampsIfNeeded(stampFilters)))
      .then((setMaterials, stampMaterials) => {
        // TODO find more stylish way of doing this
        if (!Array.isArray(setMaterials)) setMaterials = [setMaterials];
        if (!Array.isArray(stampMaterials)) stampMaterials = [stampMaterials];

        const searchQuery = queryMaterialBuilder(filters,  [...setMaterials, ...stampMaterials])

        return $.ajax({
          method: 'POST',
          url: url,
          contentType: "application/json; charset=utf-8",
          accept: "application/json",
          data: JSON.stringify({
            where: searchQuery,
            page: parseInt(page),
            max_results: maxResults,
            sort_by: sortBy,
            sort_order: parseInt(order)
          }),
          cache: false
        });
      });
  }
}

export const RECEIVE_MATERIALS = 'RECEIVE_MATERIALS';
export const receiveMaterials = (key, response) => {
  return {
    type: RECEIVE_MATERIALS,
    key,
    items: response._items,
    links: response._links,
    meta: response._meta
  };
}

export const paginateTo = (numPage) => {
  return (dispatch, getState) => {
    return dispatch(performSearchToPage(numPage, getState().search.maxResults, getState().search.sortBy, getState().search.order));
  };
};

export const performSearch = () => {
  return (dispatch, getState) => {
    return dispatch(performSearchToPage(getState().search.page, getState().search.maxResults, getState().search.sortBy, getState().search.order));
  };
};

export const performSetFilterSearch = (filter) => {
  return (dispatch, getState) => {
    let url;

    if (filter.name == 'setMembership') {
      url = `${SET_SERVICE_API}/sets?include=materials&filter[name]=${filter.value}`;
    } else {
      url = `${SET_SERVICE_API}/sets/${filter.value}?include=materials`;
    }

    return $.ajax({
      method: 'GET',
      url: url,
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json",
      jsonp: false
    })
    .then((response) => {
      let comparator = filter.comparator
      if (filter.comparator=='not in') {
        comparator = 'not_in'
      }
      let material_uuids = [];
      if (response.included) {
        material_uuids = response.included.map(material => material.id)
      }

      return { [comparator]: material_uuids };
    }, (error) => {
      return dispatch(handleSetsServiceErrors(error))
    });
  }
}

export const performStampFilterSearch = (filter) => {
  return (dispatch, getState) => {
    let permissionType = filter.name.replace(/Permission/,'');
    let filterValue = filter.value;

    if (filter.comparator.includes("user") && !filter.value.includes("@")) {
      filterValue += "@sanger.ac.uk"
    }
    const stampQuery = `filter[permitted]=${filterValue}&filter[permission_type]=${permissionType}`;
    const url = `${STAMP_SERVICE_API}/materials?${stampQuery}`;

    return $.ajax({
      method: 'GET',
      url: url,
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json",
      jsonp: false
    })
    .then((response) => {
      let comparator = filter.comparator;
      if (filter.comparator == 'has') {
        comparator = 'has';
      }
      let data = {};
      let material_uuids = [];
      // Extract the material UUIDs from the response
      if (response.data) {
        material_uuids = response.data.map((material) => {
          return material.attributes['material-uuid'] });
      }
      data[comparator] = material_uuids;

      return data;
    });
  }
}

export const createNewSet = (materials, setName) => {
  return (dispatch)=> {
    dispatch(createSetOnly(setName))
    .then((response) => {
      const set = response.data;
      return dispatch(addMaterialsToSet(materials, set))
    })
  }
}

export const createSetOnly = (setName, showMessage = true) => {
  return function(dispatch) {
    var validationError = validateNewSetName(setName);
    if (validationError) {
      return dispatch(userMessage(validationError, "danger"));
    }
    const data = { type: 'sets', attributes: {name: setName}};
    return dispatch(createResource(data)).then((response)=>{
      dispatch(receiveSet(response))
      if (showMessage) {
        dispatch(userMessage(`Successfully created set: ${setName}`, 'info'));
      }
      return response;
    }, (error) => {
      const detail = _getErrorDetails({responseJSON: error.response.data});
      return dispatch(userMessage(`Failed to create set. ${detail}`, 'danger'));
    })
  }
}

export const RECEIVE_SET = "RECEIVE_SET"
export const receiveSet = (response) => {
  return {
    type: RECEIVE_SET,
    set: response
  }
}

export const GET_ALL_SETS = "GET_ALL_SETS"
export const getAllSets = () => {
  return (dispatch, getState) => {
    const userEmail = getState().userEmail;
    return $.ajax({
      method: 'GET',
      url: `${SET_SERVICE_API}/sets/?filter[owner_id]=${userEmail}&filter[locked]=false`,
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json",
      jsonp: false
    })
    .then((response) => {
      return dispatch(receiveAllSets(response))
    }, (error) => {
      return dispatch(handleSetsServiceErrors(error));
    });
  }
}

export const RECEIVE_ALL_SETS = "RECEIVE_ALL_SETS"
export const receiveAllSets = (response) => {
  return {
    type: RECEIVE_ALL_SETS,
    sets: response
  };
}

export const bySearchPage = (search, action) => {
  return (dispatch, getState) => {
    const batchSize = getState().search.batchGroup;
    const pager = (page) => {
          return dispatch(fetchPageForSearch({ page, maxResults: 0 }))
            .then((results) => {
              return batchAction(results._items, action, batchSize)
                .then(() => {
                  if (results._links.next) {
                    return pager(results._links.next.page);
                  } else {
                    return $.Deferred().resolve();
                  }
                })
            })
        }

    return pager(1);
  }
}

const batchAction = (items, action, batchSize) => {
  const batcher = (items) => {
    let batch = items;
    let remaining = [];
    if (items.length > batchSize) {
      batch = items.slice(0, batchSize);
      remaining = items.slice(batchSize);
    }
    return action(batch).then(() => {
      if (remaining.length > 0) {
        return batcher(remaining);
      } else {
        return $.Deferred().resolve();
      }
    })
  };
  return batcher(items);
}

export const performSetTransactionOperationWithMaterialsFromSearch = (setId, operation) => {
  return (dispatch, getState) => {
    return dispatch(createSetTransaction(setId, operation))
    .then((setTransaction) => {
      return dispatch(bySearchPage(getState().search, (items) => {
        return dispatch(addMaterialsToSetTransaction(items, setTransaction))
      })).then(() => {
        return dispatch(commitSetTransaction(setTransaction))
      })
    })
  }
}

export const commitSetTransaction = (setTransaction) => {
  const setTransactionId = setTransaction.data.id

  return (dispatch, getState) => {
    const body = {
      data: {
        id: setTransactionId,
        type: 'set_transactions',
        attributes: { status: 'done' }
      }
    }
    return $.ajax({
      method: 'PUT',
      url: `${SET_SERVICE_API}/set-transactions/${setTransactionId}`,
      accept: "application/vnd.api+json",
      contentType: "application/vnd.api+json",
      data: JSON.stringify(body)
    }).fail((error) => {
      const detail = _getErrorDetails(error);
      return dispatch(userMessage(`Failed to commit transaction for set. No changes will be applied. ${detail}`, 'danger'));
    }).then(() => {
      return setTransaction
    });
  }
}

export const addMaterialsToSetTransaction = (items, setTransaction) => {
  const setTransactionId = setTransaction.data.id

  return (dispatch, getState) => {
    const body = {
        data: items.map((item) => {
          return {
            type: 'materials',
            id: item['_id']
          }
        })
    }
    return $.ajax({
      method: 'POST',
      url: `${SET_SERVICE_API}/set-transactions/${setTransactionId}/relationships/materials`,
      accept: "application/vnd.api+json",
      contentType: "application/vnd.api+json",
      data: JSON.stringify(body)
    }).fail((error) => {
      const detail = _getErrorDetails(error);
      return dispatch(userMessage(`Failed to add materials to set transaction. No changes will be applied. ${detail}`, 'danger'));
    }).then(() => {
      return setTransaction
    });
  }
}

export const createSetTransaction = (param, operationName) => {
  return (dispatch, getState) => {
    let body = {
        data: {
          type: 'set_transactions',
          attributes: { operation: operationName, batch_size: getState().search.batchTransactionSize }
        }
    }
    if (operationName == 'create') {
      body.data.attributes.set_name = param
    } else {
      body.data.attributes.aker_set_id = param
    }
    return $.ajax({
      method: 'POST',
      url: `${SET_SERVICE_API}/set-transactions`,
      accept: "application/vnd.api+json",
      contentType: "application/vnd.api+json",
      data: JSON.stringify(body)
    }).fail((error) => {
      const detail = _getErrorDetails(error);
      return dispatch(userMessage(`Failed to create transaction for set. ${detail}`, 'danger'));
    });
  }
}

export const createSetFromSearch = (setName) => {
  return (dispatch) => {
    var validationError = validateNewSetName(setName);
    if (validationError) {
      return dispatch(userMessage(validationError, "danger"));
    }
    dispatch(startCreateSet())
    return dispatch(performSetTransactionOperationWithMaterialsFromSearch(setName, 'create'))
    .then(() => {
      return dispatch(userMessage(`Successfully created set "${setName}" and added materials`, 'info'));
    })
    .always(() => {
      dispatch(stopCreateSet())
    });
  }
};

export const addMaterialsToSetFromSearch = (setId) =>{
  return (dispatch) => {
    dispatch(startAddMaterialsToSet())
    return dispatch(performSetTransactionOperationWithMaterialsFromSearch(setId, 'add'))
    .then(() => {
      return dispatch(userMessage("Successfully added materials into set", 'info'));
    })
    .always(() => {
      dispatch(stopAddMaterialsToSet())
    });
  }
}

export const removeMaterialsFromSetFromSearch = (setId) => {
  return (dispatch) => {
    dispatch(startRemoveMaterialsFromSet())
    return dispatch(performSetTransactionOperationWithMaterialsFromSearch(setId, 'remove'))
    .then(() => {
      return dispatch(userMessage("Successfully removed materials from set", 'info'));
    })
    .always(() => {
      dispatch(stopRemoveMaterialsFromSet())
    });

  }
}

export const ADD_MATERIALS_TO_SET = "ADD_MATERIALS_TO_SET"
export const addMaterialsToSet = (materials, setId) => {
  return (dispatch) => {
    let uuids = materials.map((material) => { return { id: material._id, type:'materials' } });

    return $.ajax({
      method: 'POST',
      url: `${SET_SERVICE_API}/sets/${setId}/relationships/materials`,
      accept: "application/vnd.api+json",
      contentType: "application/vnd.api+json",
      data: JSON.stringify({ data: uuids })
    }).fail((error) => {
      const detail = _getErrorDetails(error);
      return dispatch(userMessage(`Failed to add materials to set. ${detail}`, 'danger'));
    });
  }
}

export const REMOVE_MATERIALS_FROM_SET = "REMOVE_MATERIALS_FROM_SET"
export const removeMaterialsFromSet = (materials, set) => {
  return (dispatch) => {
    if (!Array.isArray(materials)) materials = [materials];

    let uuids = materials.map((material)=>{ return { id: material._id, type:'materials'} });

    return $.ajax({
      method: 'DELETE',
      url: `${SET_SERVICE_API}/sets/${set.id}/relationships/materials`,
      contentType: "application/vnd.api+json",
      processData: false,
      data: JSON.stringify({ data: uuids })
    }).fail((error) => {
      const detail = _getErrorDetails(error);
      return dispatch(userMessage(`Failed to remove materials from set. ${detail}`, 'danger'));
    });
  }
}

export const SELECT_STAMP = "SELECT_STAMP";
export const selectStamp = (stampId) => {
  return (dispatch, getState) => {
    const selectedStamp = getState().stampsInfo.stamps.filter((stamp) => {
      return (stamp.id == stampId);
    })[0];
    return dispatch({
      type: SELECT_STAMP,
      selectedStamp
    });
  }
}

const _apply_generation = (nameOperation) => {
  return (stampId) => {
    return (dispatch, getState) => {
      dispatch(startStamping())

      return dispatch(bySearchPage(getState().search, (items) => {
        let uuids = items.map((item)=>{ return item._id });
        return $.ajax({
          method: 'POST',
          url: `${STAMP_SERVICE_API}/stamps/${stampId}/${nameOperation}`,
          accept: "application/vnd.api+json",
          contentType: "application/vnd.api+json",
          data: JSON.stringify({data: {materials: uuids}}),
          jsonp: false
        })
      }))
      .then(()=>{
        const message = nameOperation == 'apply' ? 'Stamp applied' : 'Stamp unapplied';
        return dispatch(userMessage(message, 'info'));
      }, (error)=> {
        if (error.status === 403) {
          return dispatch(userMessage('You cannot alter permissions on materials that you do not own', 'danger'));
        } else {
          return dispatch(handleStampsServiceErrors(error));
        }
      })
      .always(() => {
        dispatch(stopStamping())
      });
    }
  }
}

const _getErrorDetails = (error) => {
  try {
    let detail = [];
    if (error.responseJSON.errors) {
      detail = error.responseJSON.errors.reduce((memo, e) => {
        memo.push(e.detail);
        return memo;
      }, []);
    }
    return detail;
  } catch(e) {
    return 'Unknown error'
  }

}

export const APPLY_STAMP = "APPLY_STAMP";
export const applyStamp = _apply_generation('apply');

export const UNAPPLY_STAMP = "UNAPPLY_STAMP";
export const unapplyStamp = _apply_generation('unapply');
