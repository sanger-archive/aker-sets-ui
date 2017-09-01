import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';
import selected from './selected.es6';
import browser from './browser.es6';
import materials from './materials.es6';
import token from './token.es6';
import stampsInfo from './stamps_info.es6';
import search from './search.es6';

const reducers = combineReducers({ api, selected, search, browser, materials, token, stampsInfo});

export default reducers;
