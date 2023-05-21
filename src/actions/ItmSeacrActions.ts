import { ItmSearchActionType } from "./action-types/ItmSearchActionType";

export const itmSearchLoading = () => {
  return {
    type: ItmSearchActionType.ITM_LOADING,
  };
};

export const itmSearchLoadSucces = (results: any) => {
  return {
    type: ItmSearchActionType.ITM_LOAD_SUCCESS,
    payload: results,
  };
};

export const itmSearchLoadError = (error: string) => {
  return {
    type: ItmSearchActionType.ITM_LOAD_FAILURE,
    payload: error,
  };
};
