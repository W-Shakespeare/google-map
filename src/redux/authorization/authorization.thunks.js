import * as api from "../../api/authorization";
import * as action from "../authorization/authorization.actions";

export const checkAuthData =
  (userTypedLogin, userTypedPasword) => async (dispatch) => {
    const res = await api.checkAuthData();
    let [{ login, password }] = res;
    let togle = login === userTypedLogin && password === userTypedPasword;

    togle && dispatch(action.checkAuthData(true));
  };
