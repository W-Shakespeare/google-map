import React from "react";
import { Route } from "react-router-dom";
import withSuspense from "./hoc/withSuspense";

const MapsPage = React.lazy(() => import("./pages/MapsPage/MapsPage"));

const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const TablePage = React.lazy(() => import("./pages/TablePage"));

const Routes = () => {
  return (
    <>
      <Route exact path="/" render={withSuspense(MapsPage)} />
      <Route exact path="/Table" render={withSuspense(TablePage)} />
      <Route exact path="/Login" render={withSuspense(LoginPage)} />
    </>
  );
};

export default Routes;
