import { HostActionType } from "./action-types/HostActionType";

export const hostLoading = () => {
  return {
    type: HostActionType.HOST_LOADING,
  };
};

export const hostLoadSucces = (results: any) => {
  return {
    type: HostActionType.HOST_LOAD_SUCCESS,
    payload: results,
  };
};

export const hostLoadError = (error: string) => {
  return {
    type: HostActionType.HOST_LOAD_FAILURE,
    payload: error,
  };
};
