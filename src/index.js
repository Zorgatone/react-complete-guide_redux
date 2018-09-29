import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
