import { createSelector } from 'reselect';

const nullResource = { id: '', type: '', attributes: {}, links: {}, relationships: {} };

// API
const getApi = (state) => state.api;

const getApiData  = (type) => { return (state) => state.api[type].data };
const getBiomaterialSets = getApiData('biomaterial_sets');
const getBiomaterials    = getApiData('biomaterials');
const getProducts        = getApiData('products');

// Selected
const getSelected = (key)  => { return (state) => state.selected[key] };
const getSelectedBiomaterialSetId   = getSelected('biomaterial_set_id');
const getSelectedProductId          = getSelected('product_id');
const getSelectedResourceIdentifier = getSelected('entity');

/*******************************************************************************
  Factories
*******************************************************************************/

// Give it a relationshipType and it'll return a function
// that will find all the relations for an entity
const findResourceRelationshipFactory = (relationshipType) => {
  return (resource, relatedResources) => {

    // If we don't have a selected resource, OR that resource doesn't have the specified
    // relation, OR that relation doesn't have data, just return an empty array
    if (!resource
          || !resource.relationships[relationshipType]
          || !resource.relationships[relationshipType].data) {
      return [];
    }

    // In JSONAPI a resource identifier object is one that identifies an individual object
    // It must have a type and an id
    // http://jsonapi.org/format/#document-resource-identifier-objects
    return resource.relationships[relationshipType].data.map((resourceIdentifier) => {
      return relatedResources.find((relatedEntity) => relatedEntity.id == resourceIdentifier.id)
    })
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
export const getSelectedSet = createSelector(
  getSelectedBiomaterialSetId, getBiomaterialSets,
  findResourceByIdFactory()
)

export const getSelectedProduct = createSelector(
  getSelectedProductId, getProducts,
  findResourceByIdFactory()
)

export const getSelectedResource = createSelector(
  getSelectedResourceIdentifier, getApi,
  findResourceFactory()
)

// selected{Resource}Biomaterials Selectors
export const getSelectedSetBiomaterials = createSelector(
  getSelectedSet, getBiomaterials,
  findResourceRelationshipFactory('biomaterials')
)

export const getSelectedResourceBiomaterials = createSelector(
  getSelectedResource, getBiomaterials,
  findResourceRelationshipFactory('biomaterials')
)

