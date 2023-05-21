import { CeipaSearchActionType } from "../actions/action-types/CeipaSearchActionType";
import { IStateCeipaSearch } from "../models/IStateCeipaSearch";

const initialState: IStateCeipaSearch = {
    ceipaLoading: false,
    ceipaResults: undefined,
    error: "",
  };

  const CeipaSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case CeipaSearchActionType.CEIPA_LOADING:
        return {
          ...state,
          ceipaLoading: true,
        };
      case CeipaSearchActionType.CEIPA_LOAD_SUCCESS:
        return {
          ...state,
          ceipaLoading: false,
          ceipaResults: action.payload,
        };
      
      case CeipaSearchActionType.CEIPA_LOAD_FAILURE:
        return {
          ...state,
          ceipaLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "CEIPA_LOADING"; payload: any }
  | { type: "CEIPA_LOAD_SUCCESS"; payload: any }
  | { type: "CEIPA_LOAD_FAILURE"; payload: string };
  
  export default CeipaSearchReducer;