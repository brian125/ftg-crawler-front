import { LoginActionType } from "./action-types/LoginActionType";

export const loginLoading = () => {
  return {
    type: LoginActionType.LOGIN_LOADING,
  };
};

export const loginLoadSucces = (results: any) => {
  return {
    type: LoginActionType.LOGIN_LOAD_SUCCESS,
    payload: results,
  };
};

export const loginLoadError = (error: string) => {
  return {
    type: LoginActionType.LOGIN_LOAD_FAILURE,
    payload: error,
  };
};
