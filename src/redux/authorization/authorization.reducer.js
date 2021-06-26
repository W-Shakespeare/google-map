import * as authorization from "./authorization.types";

const initialState = {
  isAuth: false,
};

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorization.CHECK_AUTH_DATA: {
      return {
        ...state,
        isAuth: action.bool,
      };
    }
    default: {
      return state;
    }
  }
};

export default authorizationReducer;
