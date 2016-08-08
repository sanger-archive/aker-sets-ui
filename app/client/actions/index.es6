export const SELECT_SET = 'SELECT_SET';
export const selectSet = (id) => {
  return {
    type: SELECT_SET,
    id
  }
}

export const SELECT_COLLECTION = 'SELECT_COLLECTION';
export const selectCollection = (id) => {
  return {
    type: SELECT_COLLECTION,
    id
  }
}

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const selectProduct = (id) => {
  return {
    type: SELECT_PRODUCT,
    id
  }
}

export const SELECT_BIOMATERIAL = 'SELECT_BIOMATERIAL';
export const selectBiomaterial = (id) => {
  return {
    type: SELECT_BIOMATERIAL,
    id
  }
}

export const SELECT_ENTITY = 'SELECT_ENTITY';
export const selectEntity = (id, entityType) => {
  return {
    type: SELECT_ENTITY,
    entity: { id, type: entityType }
  }
}

export const STORE_ITEMS = 'STORE_ITEMS';
export const storeItems = (items) => {
  return {
    type: STORE_ITEMS,
    items
  }
}

export const SELECT_ITEM = 'SELECT_ITEM';
export const selectItem = (key) => {
  return {
    type: SELECT_ITEM,
    key
  }
}

export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const clearSelection = () => {
  return {
    type: CLEAR_SELECTION
  }
}

export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const toggleItem = (key) => {
  return {
    type: TOGGLE_ITEM,
    key
  }
}

export const SHIFT_SELECT_ITEMS = 'SHIFT_SELECT_ITEMS';
export const shiftSelectItems = (key) => {
  return {
    type: SHIFT_SELECT_ITEMS,
    key
  }
}