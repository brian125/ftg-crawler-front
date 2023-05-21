import { PoliSearchActionType } from "../actions/action-types/PoliSearchActionType";
import { IStatePoliSearch } from "../models/IStatePoliSearch";

const initialState: IStatePoliSearch = {
    poliLoading: false,
    poliResults: undefined,
    error: "",
  };

  const PoliSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case PoliSearchActionType.POLI_LOADING:
        return {
          ...state,
          poliLoading: true,
        };
      case PoliSearchActionType.POLI_LOAD_SUCCESS:
        return {
          ...state,
          poliLoading: false,
          poliResults: action.payload,
        };
      
      case PoliSearchActionType.POLI_LOAD_FAILURE:
        return {
          ...state,
          poliLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "POLI_LOADING"; payload: any }
  | { type: "POLI_LOAD_SUCCESS"; payload: any }
  | { type: "POLI_LOAD_FAILURE"; payload: string };
  
  export default PoliSearchReducer;