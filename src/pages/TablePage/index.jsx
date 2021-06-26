import React from "react";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import { compose } from "redux";
import { useSelector } from "react-redux";
import TablePage from "./TablePage";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";

const TablePageContainer = () => {
  const { allSelectedMarker } = useSelector((state) => state.maps);

  return <TablePage allSelectedMarker={allSelectedMarker} />;
};
export default compose(
  withAuthorizationRedirect,
  withErrorBoundary
)(TablePageContainer);
