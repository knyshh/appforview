import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import store from "store/index";
import { history } from "routes/urlLocations";
import Routes from "routes/routes";
import LoaderWrapper from "hoc/withLoader";

import "./main.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoaderWrapper />
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
