import React,{Component} from "react";
import ReactDom from "react-dom";
import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./App.js";
import reducer from "./reducers/index.js";

const store = createStore(reducer,applyMiddleware(logger,thunk));

ReactDom.render(
  <Provider store={store}>
     <App></App>
     </Provider>
     ,
     document.getElementById("app")
);
