// React Common Modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Reducer from "./Reducers/Reducer";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // Middleware for dispatch()
  loggerMiddleware // Middleware for loging
)(createStore);

let store = createStoreWithMiddleware(Reducer);

// Main SCSS
import "./index.scss";

// Root React Component
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <IntlProvider locale="en">
          <App />
        </IntlProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
