import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import store from "./store";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("content")
);
