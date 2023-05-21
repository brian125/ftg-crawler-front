import { PoliSearchActionType } from "./action-types/PoliSearchActionType";

export const poliSearchLoading = () => {
  return {
    type: PoliSearchActionType.POLI_LOADING,
  };
};

export const poliSearchLoadSucces = (results: any) => {
  return {
    type: PoliSearchActionType.POLI_LOAD_SUCCESS,
    payload: results,
  };
};

export const poliSearchLoadError = (error: string) => {
  return {
    type: PoliSearchActionType.POLI_LOAD_FAILURE,
    payload: error,
  };
};
