import { UnalSearchActionType } from "./action-types/UnalSearchActionType";

export const unalSearchLoading = () => {
  return {
    type: UnalSearchActionType.UNAL_LOADING,
  };
};

export const unalSearchLoadSucces = (results: any) => {
  return {
    type: UnalSearchActionType.UNAL_LOAD_SUCCESS,
    payload: results,
  };
};

export const unalSearchLoadError = (error: string) => {
  return {
    type: UnalSearchActionType.UNAL_LOAD_FAILURE,
    payload: error,
  };
};
