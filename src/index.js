import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = store => next => action => {
  console.log("[Middleware] Dispatching", action);
  const result = next(action);
  console.log("[Middleware] next state", store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(logger, thunk))
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
