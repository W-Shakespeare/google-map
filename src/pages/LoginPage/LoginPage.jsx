import React from "react";
import StyledLoginPage from "./StyledLoginPage";
import Login from "../../components/Login";
import { Logged } from "../../components/Logged/Logged";

const LoginPage = ({ isAuth }) => {
  return <StyledLoginPage>{!isAuth ? <Login /> : <Logged />}</StyledLoginPage>;
};
export default LoginPage;
