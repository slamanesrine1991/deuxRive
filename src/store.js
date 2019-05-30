import {createStore, applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import projectReducer from './reducers/projectReducer';
import centReducer from './reducers/centReducer'

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(combineReducers({
  centReducer,
  projectReducer,
}),
  compose(applyMiddleware(thunk), devTools)
)

export default store;
