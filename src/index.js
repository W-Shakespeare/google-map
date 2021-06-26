import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App/App";
import "./index.css";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <Router>
        <App />
      </Router>
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
