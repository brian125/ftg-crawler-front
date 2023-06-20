import { SanbuenaSearchActionType } from "./action-types/SanbuenaSearchActionType";

export const sanbuenaSearchLoading = () => {
  return {
    type: SanbuenaSearchActionType.SANBUENA_LOADING,
  };
};

export const sanbuenaSearchLoadSucces = (results: any) => {
  return {
    type: SanbuenaSearchActionType.SANBUENA_LOAD_SUCCESS,
    payload: results,
  };
};

export const sanbuenaSearchLoadError = (error: string) => {
  return {
    type: SanbuenaSearchActionType.SANBUENA_LOAD_FAILURE,
    payload: error,
  };
};
