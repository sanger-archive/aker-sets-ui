export const START_CREATE_SET = "START_CREATE_SET";
export const startCreateSet = () => {
  return {
    type: START_CREATE_SET,
    loader: 'creatingSet'
  }
}

export const STOP_CREATE_SET = "STOP_CREATE_SET";
export const stopCreateSet = () => {
  return {
    type: STOP_CREATE_SET,
    loader: 'creatingSet'
  }
}

export const START_ADD_MATERIALS_TO_SET = "START_ADD_MATERIALS_TO_SET";
export const startAddMaterialsToSet = () => {
  return {
     type: START_ADD_MATERIALS_TO_SET,
     loader: 'addMaterialsToSet'
  }
}

export const STOP_ADD_MATERIALS_TO_SET = "STOP_ADD_MATERIALS_TO_SET";
export const stopAddMaterialsToSet = () => {
  return {
     type: STOP_ADD_MATERIALS_TO_SET,
     loader: 'addMaterialsToSet'
  }
}

export const START_REMOVE_MATERIALS_FROM_SET = "START_REMOVE_MATERIALS_FROM_SET";
export const startRemoveMaterialsFromSet = () => {
  return {
     type: START_REMOVE_MATERIALS_FROM_SET,
     loader: 'removeMaterialsFromSet'
  }
}

export const STOP_REMOVE_MATERIALS_FROM_SET = "STOP_REMOVE_MATERIALS_FROM_SET";
export const stopRemoveMaterialsFromSet = () => {
  return {
     type: STOP_REMOVE_MATERIALS_FROM_SET,
     loader: 'removeMaterialsFromSet'
  }
}

export const START_STAMPING = "START_STAMPING";
export const startStamping = () => {
  return {
     type: START_STAMPING,
     loader: 'stamping'
  }
}

export const STOP_STAMPING = "STOP_STAMPING";
export const stopStamping = () => {
  return {
     type: STOP_STAMPING,
     loader: 'stamping'
  }
}