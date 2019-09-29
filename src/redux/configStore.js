import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
    posts: postReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

// const configureStore = () =>{
//     return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// }

export default configureStore;
