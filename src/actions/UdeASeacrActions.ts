import { UdeASearchActionType } from "./action-types/UdeASearchActionType";

export const udeaSearchLoading = () => {
  return {
    type: UdeASearchActionType.UDEA_LOADING,
  };
};

export const udeaSearchLoadSucces = (results: any) => {
  return {
    type: UdeASearchActionType.UDEA_LOAD_SUCCESS,
    payload: results,
  };
};

export const udeaSearchLoadError = (error: string) => {
  return {
    type: UdeASearchActionType.UDEA_LOAD_FAILURE,
    payload: error,
  };
};
