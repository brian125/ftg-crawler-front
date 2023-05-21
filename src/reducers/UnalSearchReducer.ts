import { UnalSearchActionType } from "../actions/action-types/UnalSearchActionType";
import { IStateUnalSearch } from "../models/IStateUnalSearch";

const initialState: IStateUnalSearch = {
    unalLoading: false,
    unalResults: undefined,
    error: "",
  };

  const UnalSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case UnalSearchActionType.UNAL_LOADING:
        return {
          ...state,
          unalLoading: true,
        };
      case UnalSearchActionType.UNAL_LOAD_SUCCESS:
        return {
          ...state,
          unalLoading: false,
          unalResults: action.payload,
        };
      
      case UnalSearchActionType.UNAL_LOAD_FAILURE:
        return {
          ...state,
          unalLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "UNAL_LOADING"; payload: any }
  | { type: "UNAL_LOAD_SUCCESS"; payload: any }
  | { type: "UNAL_LOAD_FAILURE"; payload: string };
  
  export default UnalSearchReducer;