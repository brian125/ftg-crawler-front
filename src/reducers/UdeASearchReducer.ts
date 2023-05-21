import { UdeASearchActionType } from "../actions/action-types/UdeASearchActionType";
import { IStateUdeASearch } from "../models/IStateUdeASearch";

const initialState: IStateUdeASearch = {
    udeaLoading: false,
    udeaResults: undefined,
    error: "",
  };

  const UdeASearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case UdeASearchActionType.UDEA_LOADING:
        return {
          ...state,
          udeaLoading: true,
        };
      case UdeASearchActionType.UDEA_LOAD_SUCCESS:
        return {
          ...state,
          udeaLoading: false,
          udeaResults: action.payload,
        };
      
      case UdeASearchActionType.UDEA_LOAD_FAILURE:
        return {
          ...state,
          udeaLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "UDEA_LOADING"; payload: any }
  | { type: "UDEA_LOAD_SUCCESS"; payload: any }
  | { type: "UDEA_LOAD_FAILURE"; payload: string };
  
  export default UdeASearchReducer;