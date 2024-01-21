import React from "react";
import { createRoot } from "react-dom/client";

import "./i18n";

import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
