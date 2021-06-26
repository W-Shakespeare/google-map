import React, { useState } from "react";
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthData } from "../../redux/authorization/authorization.thunks";

const ContainerLogin = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { isAuth } = useSelector((state) => state.authorization);

  const dispatch = useDispatch();

  const sendAuthData = (e) => {
    // imitate sending
    e.preventDefault();
    dispatch(checkAuthData(loginValue, passwordValue));
    setLoginValue("");
    setPasswordValue("");
  };

  return (
    <Login
      sendAuthData={sendAuthData}
      loginValue={loginValue}
      passwordValue={passwordValue}
      setLoginValue={setLoginValue}
      setPasswordValue={setPasswordValue}
      isAuth={isAuth}
    />
  );
};
export default ContainerLogin;
