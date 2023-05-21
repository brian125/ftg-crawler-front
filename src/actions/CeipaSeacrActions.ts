import { CeipaSearchActionType } from "./action-types/CeipaSearchActionType";

export const ceipaSearchLoading = () => {
  return {
    type: CeipaSearchActionType.CEIPA_LOADING,
  };
};

export const ceipaSearchLoadSucces = (results: any) => {
  return {
    type: CeipaSearchActionType.CEIPA_LOAD_SUCCESS,
    payload: results,
  };
};

export const ceipaSearchLoadError = (error: string) => {
  return {
    type: CeipaSearchActionType.CEIPA_LOAD_FAILURE,
    payload: error,
  };
};
