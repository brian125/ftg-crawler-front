import { PoligrancSearchActionType } from "./action-types/PoligrancSearchActionType";

export const poligrancSearchLoading = () => {
  return {
    type: PoligrancSearchActionType.POLIGRANC_LOADING,
  };
};

export const poligrancSearchLoadSucces = (results: any) => {
  return {
    type: PoligrancSearchActionType.POLIGRANC_LOAD_SUCCESS,
    payload: results,
  };
};

export const poligrancSearchLoadError = (error: string) => {
  return {
    type: PoligrancSearchActionType.POLIGRANC_LOAD_FAILURE,
    payload: error,
  };
};
