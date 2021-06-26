import * as authorization from "./authorization.types";

export const checkAuthData = (bool) => ({
  type: authorization.CHECK_AUTH_DATA,
  bool,
});
