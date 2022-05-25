import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import filters from '../reducers/filters';
import assets from '../reducers/assets';
import tikers from '../reducers/tikers';


const store = createStore(
    combineReducers({ filters, assets, tikers }),
    compose(applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;