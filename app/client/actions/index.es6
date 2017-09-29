import jwt_decode from "jwt-decode"
import { setHeader, readEndpoint } from "redux-json-api"
import queryMaterialBuilder from '../lib/query_builder.es6'
import { handleMaterialsServiceErrors, handleSetsServiceErrors, handleStampsServiceErrors } from '../lib/service_errors.es6';
import { startCreateSet, stopCreateSet, startAddMaterialsToSet, stopAddMaterialsToSet, startRemoveMaterialsFromSet, stopRemoveMaterialsFromSet, startStamping, stopStamping } from './loading.es6';

export const SELECT = "SELECT";
export const select = (id, selectionType) => {
  return {
    type: SELECT,
    id,
    selectionType
  }
}

export const SELECT_ENTITY = "SELECT_ENTITY";
export const selectEntity = (id, entityType) => {
  return {
    type: SELECT_ENTITY,
    entity: { id, type: entityType }
  }
}

export const STORE_ITEMS = "STORE_ITEMS";
export const storeItems = (items) => {
  return {
    type: STORE_ITEMS,
    items
  }
}

export const SELECT_ITEM = "SELECT_ITEM";
export const selectItem = (key) => {
  return {
    type: SELECT_ITEM,
    key
  }
}

export const CLEAR_SELECTION = "CLEAR_SELECTION";
export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  }
}

export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const toggleItem = (key) => {
  return {
    type: TOGGLE_ITEM,
    key
  }
}

export const SHIFT_SELECT_ITEMS = "SHIFT_SELECT_ITEMS";
export const shiftSelectItems = (key) => {
  return {
    type: SHIFT_SELECT_ITEMS,
    key
  }
}

export const RECEIVE_MATERIALS = "RECEIVE_MATERIALS";
export const receiveMaterials = (materials, links, setId) => {
  return {
    type: RECEIVE_MATERIALS,
    materials,
    links,
    setId
  }
}

export const FETCH_MATERIALS = "FETCH_MATERIALS";
export const fetchMaterials = (json, setId) => {
  const materials = json.data;
  const links = json.links;
  return function(dispatch, getState) {
    if (!materials) return false;
    const ids = materials.map((material) => material.id);
    const url = "/materials_service/materials/search";

    return $.ajax({
      method: 'POST',
      url: url,
      contentType: "application/json; charset=utf-8",
      accept: "application/json",
      data: JSON.stringify({
        where:  {"_id" : { "$in": ids } },
        /*max_results: BATCH_SIZE,
        page: 1*/
      }),
      cache: false
    }).then((response) => {
      return dispatch(receiveMaterials(response._items, links, setId)) }, 
    (error) => {
      return dispatch(handleMaterialsServiceErrors(error))
    });
  }
}


/*export const FETCH_MATERIALS_FOR_SET = "FETCH_MATERIALS_FOR_SET";
export const fetchMaterialsForSet = function(setId, page, count) {
  return function(dispatch) {
    return dispatch(fetchTokenIfNeeded())
      .then(() => { return dispatch(readEndpoint(`sets/${setId}/materials?page[number]=1&page[size]=20`)) });
  }
}*/

const urlForMaterialsFromSet = function(setId, pageNumber, pageSize) {
  return encodeURI(`sets/${setId}/materials?page[number]=${pageNumber}&page[size]=${pageSize}`);  
}

export const FETCH_MATERIALS_FROM_SET_BY_URL = "FETCH_MATERIALS_FROM_SET_BY_URL";
export const fetchMaterialsFromSetByUrl = function(url) {
  const setId = url.match(/sets\/([^/]*)/)[1]
  const pageNumber = url.match(new RegExp(encodeURI("page[number]") + "=(\\d*)"))[1]
  const pageSize = url.match(new RegExp(encodeURI("page[size]") + "=(\\d*)"))[1]

  return function(dispatch) {
    return dispatch(fetchTokenIfNeeded())
      .then(() => { 
        return dispatch(readEndpoint(urlForMaterialsFromSet(setId, pageNumber, pageSize)));
      })
      .then((json) => { return dispatch(fetchMaterials(json, setId)) });
  }  
}

export const FETCH_SET_AND_MATERIALS = "FETCH_SET_AND_MATERIALS";
export const fetchSetAndMaterials = function(setId, pageNumber, sizeNumber) {
  return function(dispatch) {
    return dispatch(fetchMaterialsFromSetByUrl(urlForMaterialsFromSet(setId, pageNumber, sizeNumber)));
  }
}
/*  return function(dispatch) {
    dispatch(fetchTokenIfNeeded())
      .then(() => { return dispatch(fetchMaterialsForSet(setId, 1, 25)); })
      //.then(() => { return dispatch(readEndpoint(`sets/${setId}?include=materials`)); })
      .then((json) => { return dispatch(fetchMaterials(json, setId)) });
  }
}*/

export const FETCH_TOKEN_IF_NEEDED = "FETCH_TOKEN_IF_NEEDED";
export const fetchTokenIfNeeded = () => {
  return function(dispatch, getState) {
    let token = getState().token;

    if (!token || isExpired(token)) {
      return dispatch(fetchToken());
    }

    return $.Deferred().resolve();
  }
}

const isExpired = (token) => {
  const payload = jwt_decode(token);
  return payload.exp < Date.now()/1000;
}

export const FETCH_TOKEN = "FETCH_TOKEN";
export const fetchToken = () => {
  return (dispatch, getState) => {
    return $.ajax({
      method: 'POST',
      url: "/token",
      accept: "application/json",
    })

    // Put the token in the Store
    .then(function(response) {
      return dispatch(receiveToken(response.token))
    })

    // Set it as a default header for redux-json-api
    .then(function() {
      return dispatch(setHeader({"X-Authorisation": getState().token}));
    });
  }
}

export const RECEIVE_TOKEN = "RECEIVE_TOKEN";
export const receiveToken = (token) => {
  return {
    type: RECEIVE_TOKEN,
    token
  }
}

export const FETCH_MATERIAL_SCHEMA = "FETCH_MATERIAL_SCHEMA";
export const fetchMaterialSchema = () => {
  return (dispatch, getState) => {
    return $.ajax({
      method: 'GET',
      url: "/materials_service/materials/schema",
      accept: "application/json",
    })

    .then((response) => {
      return dispatch(receiveMaterialSchema(response));
    }, (error) => { return dispatch(handleMaterialsServiceErrors(error))});
  }
}

export const RECEIVE_MATERIAL_SCHEMA = "RECEIVE_MATERIAL_SCHEMA";
export const receiveMaterialSchema = (response) => {
  return {
    type: RECEIVE_MATERIAL_SCHEMA,
    schema: response
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
    return dispatch(fetchTokenIfNeeded())
    .then(() => {
    return $.ajax({
      method: 'GET',
      url: "/stamps_service/stamps",
      contentType: "application/vnd.api+json",
      accept: "application/vnd.api+json",
      headers: {
        "X-Authorisation": getState().token
      }

      })
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


export const UPDATE_FILTER_NAME = "UPDATE_FILTER_NAME";
export const updateFilterName = (index, value) => {
  return {
    type: UPDATE_FILTER_NAME,
    index,
    value
  }
}

export const UPDATE_FILTER_COMPARATOR = "UPDATE_FILTER_COMPARATOR"
export const updateFilterComparator = (index, value) => {
  return {
    type: UPDATE_FILTER_COMPARATOR,
    index,
    value
  }
}

export const UPDATE_FILTER_VALUE = "UPDATE_FILTER_VALUE"
export const updateFilterValue = (index, value) => {
  return {
    type: UPDATE_FILTER_VALUE,
    index,
    value
  }
}

export const REMOVE_FILTER = "REMOVE_FILTER"
export const removeFilter = (index) => {
  return {
    type: REMOVE_FILTER,
    index
  }
}

export const ADD_FILTER = "ADD_FILTER"
export const addFilter = () => {
  return {
    type: ADD_FILTER
  }
}

export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH"
export const setCurrentSearch = () => {
  return {
    type: SET_CURRENT_SEARCH
  }
}

export const FETCH_SET_MATERIALS_IF_NEEDED = "FETCH_SET_MATERIALS_IF_NEEDED"
export const fetchSetMaterialsIfNeeded = () => {
  return (dispatch, getState) => {
    const filters = getState().search.current;
    const filterSearches = filters.reduce((memo, filter)=>{
      if(filter.name == 'setMembership') {
        memo.push(dispatch(performSetFilterSearch(filter)));
      }
      return memo;
    }, [])

    if (filterSearches.length > 0) {
      return $.when.apply(null, filterSearches);
    }
    return $.Deferred().resolve();
  }
}

export const FETCH_STAMPS_IF_NEEDED = "FETCH_STAMPS_IF_NEEDED"
export const fetchStampsIfNeeded = () => {
  return (dispatch, getState) => {
    const filters = getState().search.current;
    const filterSearches = filters.reduce((memo, filter) => {
      if (filter.name == 'consumePermission' || filter.name == 'editPermission') {
        memo.push(dispatch(performStampFilterSearch(filter)));
      }
      return memo;
    }, [])

    if (filterSearches.length > 0) {
      return $.when.apply(null, filterSearches);
    }

    return $.Deferred().resolve();
  }
}

export const PERFORM_SEARCH_TO_PAGE = "PERFORM_SEARCH_TO_PAGE"
export const performSearchToPage = (pageNumber, maxResults) => {
  return (dispatch, getState) => {
    // remove user messages if there are any showing
    dispatch(userMessage(''));
    return dispatch(fetchPageForSearch(pageNumber, maxResults)).then((response) => {
        return dispatch(receiveSearchResults(response));
      }, (error) => {
        return dispatch(handleMaterialsServiceErrors(error));
      });
  }
};

export const FETCH_PAGE_FOR_SEARCH = "FETCH_PAGE_FOR_SEARCH"
export const fetchPageForSearch = (pageNumber, maxResults) => {
  return (dispatch, getState) => {
    return $.when(dispatch(fetchSetMaterialsIfNeeded()), dispatch(fetchStampsIfNeeded()))
      .then(() => {
        const setMaterials = getState().search.setMaterials;
        const stampMaterials = getState().search.stampMaterials;

        let filters = getState().search.current;
        // search.current contains only complete filter rows

        const searchQuery = queryMaterialBuilder(filters,  setMaterials.concat(stampMaterials))
        const url = "/materials_service/materials/search";

        return $.ajax({
          method: 'POST',
          url: url,
          contentType: "application/json; charset=utf-8",
          accept: "application/json",
          data: JSON.stringify({
            where: searchQuery,
            max_results: maxResults,
            page: pageNumber
          }),
          cache: false
        });
      });
  }
}

export const PERFORM_SEARCH_WITH_URL = "PERFORM_SEARCH_WITH_URL";
export const performSearchWithUrl = (url) => {
  return (dispatch, getState) => {
    return dispatch(fetchSetMaterialsIfNeeded())
      .then(() => {
        return $.ajax({
          url: `/materials_service/${url}`,
          method: 'GET',
          accept: "application/json",
          cache: false
        })
      })
  }
}

export const PAGINATE_TO = "PAGINATE_TO";
export const paginateTo = (numPage) => {
  return (dispatch, getState) => {
    return dispatch(performSearchToPage(numPage, getState().search.maxResults));
  };
};

export const PERFORM_SEARCH = "PERFORM_SEARCH"
export const performSearch = () => {
  return (dispatch, getState) => {
    return dispatch(performSearchToPage(getState().search.pageNumber, getState().search.maxResults));
  };
};


export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
export const receiveSearchResults = (response) => {
  const items = response._items;
  const links = response._links;
  const meta = response._meta;

  return {
    type: RECEIVE_SEARCH_RESULTS,
    results: items,
    links: links,
    meta: meta
  };
}

export const PERFORM_SET_FILTER_SEARCH = "PERFORM_SET_FILTER_SEARCH"
export const performSetFilterSearch = (filter) => {
  return (dispatch, getState) => {
    return dispatch(fetchTokenIfNeeded())
    .then(() => {
      const setQuery = `filter[name]=${filter.value}`
      const url = `/sets_service/sets?include=materials&${setQuery}`

      return $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/vnd.api+json",
        accept: "application/vnd.api+json",
        headers: {
          "X-Authorisation": getState().token
        },
        jsonp: false
      })
    })
    .then((response) => {
      let comparator = filter.comparator
      if (filter.comparator=='not in') {
        comparator = 'not_in'
      }
      const data = {}
      let material_uuids = [];
      if (response.included) {
        material_uuids = response.included.map((material)=>{return material.id})
      }
      data[comparator] = material_uuids
      const result = Object.assign({}, data)
      return dispatch(receiveSetsFromFilter(result))
    }, (error) => {
      return dispatch(handleSetsServiceErrors(error))
    });
  }
}

export const PERFORM_STAMP_FILTER_SEARCH = "PERFORM_STAMP_FILTER_SEARCH"
export const performStampFilterSearch = (filter) => {
  return (dispatch, getState) => {
    return dispatch(fetchTokenIfNeeded())
      .then(() => {
        let permissionType = filter.name.replace(/Permission/,'');
        const stampQuery = `filter[permitted]=${filter.value}&filter[permission_type]=${permissionType}`;
        const url = `/stamps_service/materials?${stampQuery}`;

        return $.ajax({
          method: 'GET',
          url: url,
          contentType: "application/vnd.api+json",
          accept: "application/vnd.api+json",
          headers: {
            "X-Authorisation": getState().token
          },
          jsonp: false
        });
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
        const result = Object.assign({}, data);

        return dispatch(receiveStampsFromFilter(result));
      });
  }
}

export const RECEIVE_SETS_FROM_FILTER = "RECEIVE_SETS_FROM_FILTER"
export const receiveSetsFromFilter = (result) => {
  return {
    type: RECEIVE_SETS_FROM_FILTER,
    setMaterials: result
  }
}

export const RECEIVE_STAMPS_FROM_FILTER = "RECEIVE_STAMPS_FROM_FILTER"
export const receiveStampsFromFilter = (result) => {
  return {
    type: RECEIVE_STAMPS_FROM_FILTER,
    stampMaterials: result
  }
}

export const CREATE_NEW_SET = "CREATE_NEW_SET"
export const createNewSet = (items, setName) => {
  return (dispatch)=> {
    dispatch(createSetOnly(setName))
    .then((response) => {
      const setId = response.data.id
      return dispatch(addMaterialsToSet(items, setId))
    })
  }
}

export const CREATE_SET_ONLY = "CREATE_SET_ONLY"
export const createSetOnly = (setName) => {
  return function(dispatch, getState) {
    return dispatch(fetchTokenIfNeeded())
    .then(() => {
      const data = {data: { type: 'sets', attributes: {name: setName}}};
      const body = Object.assign({}, data);
      return $.ajax({
        method: 'POST',
        url: "/sets_service/sets",
        contentType: "application/vnd.api+json",
        accept: "application/vnd.api+json",
        headers: {
          "X-Authorisation": getState().token
        },
        data: JSON.stringify(body),
        jsonp: false
      }).fail((error) => {
        const detail = _getErrorDetails(error);
        return dispatch(userMessage(`Failed to create set. ${detail}`, 'danger'));
      });
    })
    .then((response)=>{
      dispatch(receiveSet(response))
      return response;
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
    return dispatch(fetchTokenIfNeeded())
    .then(() => {
      const token = getState().token
      const userEmail = jwt_decode(token).data.email;
      return $.ajax({
        method: 'GET',
        url: `/sets_service/sets/?filter[owner_id]=${userEmail}`,
        contentType: "application/vnd.api+json",
        accept: "application/vnd.api+json",
        headers: {
          "X-Authorisation": getState().token
        },
        jsonp: false
      })
      .then((response) => {
        return dispatch(receiveAllSets(response))
      }, (error) => {
        return dispatch(handleSetsServiceErrors(error));
      });
    })
  }
}

export const RECEIVE_ALL_SETS = "RECEIVE_ALL_SETS"
export const receiveAllSets = (response) => {
  return {
    type: RECEIVE_ALL_SETS,
    sets: response
  };
}

export const BY_SEARCH_PAGE = "BY_SEARCH_PAGE"
export const bySearchPage = (search, action) => {
  return (dispatch, getState) => {

    const pager = (pageNumber) => {
          return dispatch(fetchPageForSearch(pageNumber, getState().search.batchGroup))
            .then((results) => {
              return action(results._items)
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

export const CREATE_SET_FROM_SEARCH = "CREATE_SET_FROM_SEARCH"
export const createSetFromSearch = (setName) => {
  return (dispatch, getState) => {
    dispatch(startCreateSet())
    return dispatch(createSetOnly(setName))
      .then((response) => {
        return dispatch(bySearchPage(getState().search, (items) => {
          return dispatch(addMaterialsToSet(items, response.data.id))
        }));
      })
      .then(() => {
        return dispatch(userMessage("Successfully created set", 'info'));
      })
      .always(() => {
        dispatch(stopCreateSet())
      });
  }
};

export const ADD_MATERIALS_TO_SET_FROM_SEARCH = "ADD_MATERIALS_TO_SET_FROM_SEARCH"
export const addMaterialsToSetFromSearch = (setId) =>{
  return (dispatch, getState) => {
    dispatch(startAddMaterialsToSet())
    return dispatch(bySearchPage(getState().search, (items) => {
      return dispatch(addMaterialsToSet(items, setId))
    }))
    .then(() => {
      return dispatch(userMessage("Successfully added materials into set", 'info'));
    })
    .always(() => {
      dispatch(stopAddMaterialsToSet())
    });
  }
}

export const REMOVE_MATERIALS_FROM_SET_FROM_SEARCH = "REMOVE_MATERIALS_FROM_SET_FROM_SEARCH"
export const removeMaterialsFromSetFromSearch = (setId) => {
  return (dispatch, getState) => {
    dispatch(startRemoveMaterialsFromSet())
    return dispatch(bySearchPage(getState().search, (items) => {
      return dispatch(removeMaterialsFromSet(items, setId))
    }))
    .then(() => {
      return dispatch(userMessage("Successfully removed materials from set", 'info'));
    })
    .always(() => {
      dispatch(stopRemoveMaterialsFromSet())
    });

  }
}

export const ADD_MATERIALS_TO_SET = "ADD_MATERIALS_TO_SET"
export const addMaterialsToSet = (items, setId) => {
  return (dispatch, getState) => {
    return dispatch(fetchTokenIfNeeded())
   .then(()=>{
      let uuids = items.map((item)=>{ return Object.assign({}, {id: item._id, type:'materials'}) });
      const body = Object.assign({}, {data: uuids});
      return $.ajax({
        method: 'POST',
        url: `/sets_service/sets/${setId}/relationships/materials`,
        accept: "application/vnd.api+json",
        contentType: "application/vnd.api+json",
        headers: {
          "X-Authorisation": getState().token
        },
        data: JSON.stringify(body)
      }).fail((error) => {
        const detail = _getErrorDetails(error);
        return dispatch(userMessage(`Failed to add materials to set. ${detail}`, 'danger'));
      });
    })
  }
}

export const REMOVE_MATERIALS_FROM_SET = "REMOVE_MATERIALS_FROM_SET"
export const removeMaterialsFromSet = (items, setId) => {
  return (dispatch, getState) => {
    return dispatch(fetchTokenIfNeeded())
   .then(()=>{
      let uuids = items.map((item)=>{ return Object.assign({}, {id: item._id, type:'materials'}) });
      const body = Object.assign({}, {data: uuids});
      return $.ajax({
        method: 'DELETE',
        url: `/sets_service/sets/${setId}/relationships/materials`,
        contentType: "application/vnd.api+json",
        headers: {
          "X-Authorisation": getState().token
        },
        processData: false,
        data: JSON.stringify(body)
      }).fail((error) => {
        const detail = _getErrorDetails(error);
        return dispatch(userMessage(`Failed to remove materials from set. ${detail}`, 'danger'));
      });
    })
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

      return dispatch(fetchTokenIfNeeded())
      .then(()=>{
        return dispatch(bySearchPage(getState().search, (items) => {
          let uuids = items.map((item)=>{ return item._id });
          return $.ajax({
            method: 'POST',
            url: `/stamps_service/stamps/${stampId}/${nameOperation}`,
            accept: "application/vnd.api+json",
            contentType: "application/vnd.api+json",
            headers: {
              "X-Authorisation": getState().token
            },
            data: JSON.stringify({data: {materials: uuids}}),
            jsonp: false
          })
        }))
        .then(()=>{
          const message = nameOperation == 'apply' ? 'Stamp applied' : 'Stamp unapplied';
          return dispatch(userMessage(message, 'info'));
        }, (error)=> {
          if (error.status === 403) {
            return dispatch(userMessage('You cannot stamp/unstamp permissions on all result materials that you do not own', 'danger'));
          } else {
            return dispatch(handleStampsServiceErrors(error));
          }
        })
        .always(() => {
          dispatch(stopStamping())
        });
      })
    }
  }
}

const _getErrorDetails = (error) => {
  let detail = [];
  if (error.responseJSON.errors) {
    detail = error.responseJSON.errors.reduce((memo, e) => {
      memo.push(e.detail);
      return memo;
    }, []);
  }
  return detail;
}

export const APPLY_STAMP = "APPLY_STAMP";
export const applyStamp = _apply_generation('apply');

export const UNAPPLY_STAMP = "UNAPPLY_STAMP";
export const unapplyStamp = _apply_generation('unapply');
