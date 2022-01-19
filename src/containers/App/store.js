import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {
  authReducer,
  homePageReducer
} from '../../redux/reducers';

const reducer = combineReducers({
  auth: authReducer,
  home: homePageReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
