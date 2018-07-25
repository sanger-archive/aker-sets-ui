import { createSelector } from 'reselect';
import jwt_decode from "jwt-decode"

const nullResource = { id: '', type: '', attributes: {}, links: {}, relationships: {} };

// API
const getApi = (state) => state.api;

const getApiData  = (type) => { return (state) => { return state.api[type].data } };
const getSets                = getApiData('sets');
const getBiomaterials        = getApiData('materials');

const getUserEmail           = (state) => state.userEmail;

// Selected
const getSelectedId = (key)  => { return (state) => state.selected[key] };
const getSelectedMaterials = (key, state) => { return (state) => state.materials[key] }
const getSelectedTopId    = getSelectedId('top');
const getSelectedBottomId = getSelectedId('bottom');

/*******************************************************************************
  Factories
*******************************************************************************/

// Give it a relationshipType and it'll return a function
// that will find all the relations for a resource (or collection of resources)
const findResourceRelationshipFactory = (relationshipType) => {
  return (resources, relatedResources) => {
    // If we don't have a resource, just return an array
    if (!resources) {
      return [];
    }

    // Resource could either be an individual resource, or a collection of them
    if (!Array.isArray(resources)) {
      resources = [resources];
    }

    return resources.reduce((memo, resource) => {
      // If resource doesn't have the specified relation,
      // OR that relation doesn't have data, just return the memo
      if (!resource.relationships[relationshipType] || !resource.relationships[relationshipType].data) {
        return memo;
      }

      // In JSONAPI a resource identifier object is one that identifies an individual object
      // It must have a type and an id
      // http://jsonapi.org/format/#document-resource-identifier-objects
      memo.push(...resource.relationships[relationshipType].data.map((resourceIdentifier) => {
        return relatedResources.find((relatedEntity) => relatedEntity.id == resourceIdentifier.id)
      }))

      return memo;
    }, []);
  }
}

const findResourceByIdFactory = () => {
  return (resource_id, resources) => {
    return resources.find(resource => resource.id == resource_id);
  }
}

const findResourceFactory = () => {
  return (resourceIdentifier, resources) => {
    if (!resources[resourceIdentifier.type]) return nullResource;
    return resources[resourceIdentifier.type].data.find( (resource) => resource.id == resourceIdentifier.id );
  }
}

/*******************************************************************************
  Selectors
*******************************************************************************/

// getSelected Selectors
export const getSelectedTop = createSelector(
  getSelectedTopId, getSets,
  findResourceByIdFactory()
)

export const getSelectedBottom = createSelector(
  getSelectedBottomId, getSets,
  findResourceByIdFactory()
)

// selected{Resource}Biomaterials Selectors
export const getSelectedTopSetMaterials = createSelector(
  (state) => {  return state.materials; },
  getSelectedTop,
  (materials, set) => {
    if (set && (set.id in materials)) {
      return materials[set.id];
    }
    return {};
  }
)

export const getSelectedBottomSetMaterials = createSelector(
  (state) => {  return state.materials; },
  getSelectedBottom,
  (materials, set) => {
    if (set && (set.id in materials)) {
      return materials[set.id];
    }
    return {};
  }
)

export const getSelectedTopMaterials = (state) => getSelectedTopSetMaterials(state).instances;
export const getSelectedBottomMaterials = (state) => getSelectedBottomSetMaterials(state).instances;
export const getSelectedTopLinks = (state) => getSelectedTopSetMaterials(state).links;
export const getSelectedBottomLinks = (state) => getSelectedBottomSetMaterials(state).links;
export const getSelectedTopPage = (state) => getSelectedTopSetMaterials(state).page;
export const getSelectedBottomPage = (state) => getSelectedBottomSetMaterials(state).page;
export const getSelectedTopUrl = (state) => getSelectedTopSetMaterials(state).url;
export const getSelectedBottomUrl = (state) => getSelectedBottomSetMaterials(state).url;

// All the loaded sets that belong to the currently logged in user
export const getUserSets = createSelector(
  getUserEmail,
  getSets,
  (email, sets) => {
    return sets.reduce((memo, set)  => {
      if (set.attributes.owner_id === null) { return memo; }
      if (set.attributes.owner_id === email) memo.push(set);
      return memo;
    }, []);
  }
)
