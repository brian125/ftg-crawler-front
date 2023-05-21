import { ItmSearchActionType } from "../actions/action-types/ItmSearchActionType";
import { IStateItmSearch } from "../models/IStateItmSearch";

const initialState: IStateItmSearch = {
    itmLoading: false,
    itmResults: undefined,
    error: "",
  };

  const ItmSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case ItmSearchActionType.ITM_LOADING:
        return {
          ...state,
          itmLoading: true,
        };
      case ItmSearchActionType.ITM_LOAD_SUCCESS:
        return {
          ...state,
          itmLoading: false,
          itmResults: action.payload,
        };
      
      case ItmSearchActionType.ITM_LOAD_FAILURE:
        return {
          ...state,
          itmLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "ITM_LOADING"; payload: any }
  | { type: "ITM_LOAD_SUCCESS"; payload: any }
  | { type: "ITM_LOAD_FAILURE"; payload: string };
  
  export default ItmSearchReducer;