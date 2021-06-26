import React from "react";
import SpinnerWrapper from "./StyledSpinner";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <CircularProgress />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
