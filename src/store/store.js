import formReducer from "./reducers/FormReducer";
import orderReducer from "./reducers/orderReducer";
import personReducer from "./reducers/PersonReducer";
import { createStore } from "redux";
import { combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const combinedReducers = combineReducers({
  formRed: formReducer,
  orderRed: orderReducer,
  personRed: personReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
