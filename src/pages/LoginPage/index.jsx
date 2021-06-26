import React from "react";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import { compose } from "redux";
import LoginPage from "./LoginPage";
import { useSelector } from "react-redux";

const LoginPageContainer = () => {
  const { isAuth } = useSelector((state) => state.authorization);

  return <LoginPage isAuth={isAuth} />;
};
export default compose(withErrorBoundary)(LoginPageContainer);
