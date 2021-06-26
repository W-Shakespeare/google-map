import React from "react";
import { Btn } from "../../utils/material/button";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PersonIcon from "@material-ui/icons/Person";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthData } from "../../redux/authorization/authorization.actions";
import { useSnackbar } from "notistack";

const LoginLogoutBtn = ({ isAuth, onLoggedUser }) => {
  return (
    <>
      {isAuth ? (
        <Btn
          variant="contained"
          color="primary"
          startIcon={<SupervisorAccountIcon />}
          onClick={() => onLoggedUser(false)}
        >
          Logged
        </Btn>
      ) : (
        <Btn variant="contained" color="default" startIcon={<PersonIcon />}>
          Login
        </Btn>
      )}
    </>
  );
};

export const LoginLogoutBtnContainer = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authorization);
  const { enqueueSnackbar } = useSnackbar();

  const LoggedMessage = () => {
    enqueueSnackbar("You are logged out", {
      variant: "info",
      anchorOrigin: { horizontal: "center", vertical: "bottom" },
    });
  };

  const onLoggedUser = (bool) => {
    dispatch(checkAuthData(false));
    LoggedMessage();
  };

  return <LoginLogoutBtn isAuth={isAuth} onLoggedUser={onLoggedUser} />;
};
