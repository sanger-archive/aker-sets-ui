import {userMessage} from '../actions/index.es6';

export const BIOMATERIALS_SERVICE_NAME = 'Biomaterials service';
export const SETS_SERVICE_NAME = 'Sets service';
export const STAMPS_SERVICE_NAME = 'Stamps service';


export const handleServiceErrors = (serviceName) => {
  return (error) => {
    if (error.status === 403) {
      return userMessage('HTTP 403 - You do not have permissions to perform the action with '+serviceName, 'danger');
    }
    if (error.status === 422) {
      return userMessage('HTTP 422 - There is a problem in the request received by '+serviceName, 'danger');
    }
    if (error.status === 404) {
      return userMessage('HTTP 404 - Not found URL at '+serviceName, 'danger');
    }
    return userMessage('HTTP '+error.status+' - There was an error in '+serviceName, 'danger');
  }
}

export const handleMaterialsServiceErrors = handleServiceErrors(BIOMATERIALS_SERVICE_NAME);
export const handleSetsServiceErrors = handleServiceErrors(SETS_SERVICE_NAME);
export const handleStampsServiceErrors = handleServiceErrors(STAMPS_SERVICE_NAME);