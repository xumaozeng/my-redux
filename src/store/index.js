import { createStore, combineReducers, applyMiddleware } from "../store/redux";
import thunk from "./redux-thunk";
import logger from "./redux-logger";

function countReducer(state = 0, { type, payload }) {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  applyMiddleware(thunk, logger)
);

export default store;
