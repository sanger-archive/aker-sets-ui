import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import selected from './selected';
import browser from './browser';
import materials from './materials';
import stampsInfo from './stamps_info';
import search from './search';
import loading from './loading';
import userEmail from './user_email';

const reducers = combineReducers({
  api,
  selected,
  materials,
  browser,
  search,
  stampsInfo,
  loading,
  userEmail
});

export default reducers;
