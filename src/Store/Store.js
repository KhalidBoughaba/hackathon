import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import langReducer from './Reducers/GeneralReducer';

const rootReducer = combineReducers({Language: langReducer});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
