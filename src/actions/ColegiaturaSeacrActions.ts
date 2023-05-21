import { ColegiaturaSearchActionType } from "./action-types/ColegiaturaSearchActionType";

export const colegiaturaSearchLoading = () => {
  return {
    type: ColegiaturaSearchActionType.COLEGIATURA_LOADING,
  };
};

export const colegiaturaSearchLoadSucces = (results: any) => {
  return {
    type: ColegiaturaSearchActionType.COLEGIATURA_LOAD_SUCCESS,
    payload: results,
  };
};

export const colegiaturaSearchLoadError = (error: string) => {
  return {
    type: ColegiaturaSearchActionType.COLEGIATURA_LOAD_FAILURE,
    payload: error,
  };
};
