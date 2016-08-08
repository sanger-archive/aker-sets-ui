import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import selected from './selected.es6';
import browser from './browser.es6';

const reducers = combineReducers({ api, selected, browser });

export default reducers;