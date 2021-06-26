import React from "react";
import StyledMaps from "./StyledMaps";
import { compose } from "redux";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import Maps from "../../components/Maps";
import { withAuthorizationRedirect } from "../../hoc/withAuthorizationRedirect";

const MapsPage = () => {
  return (
    <StyledMaps>
      <Maps />
    </StyledMaps>
  );
};

export default compose(withAuthorizationRedirect, withErrorBoundary)(MapsPage);
