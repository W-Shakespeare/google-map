import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authorizationReducer from "./authorization/authorization.reducer";
import mapsReducer from "./maps/maps.reducer";

const reducers = combineReducers({
  maps: mapsReducer,
  authorization: authorizationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
