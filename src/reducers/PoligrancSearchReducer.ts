import { PoligrancSearchActionType } from "../actions/action-types/PoligrancSearchActionType";
import { IStatePoligrancSearch } from "../models/IStatePoligrancSearch";

const initialState: IStatePoligrancSearch = {
    poligrancLoading: false,
    poligrancResults: undefined,
    error: "",
  };

  const PoligrancSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case PoligrancSearchActionType.POLIGRANC_LOADING:
        return {
          ...state,
          poligrancLoading: true,
        };
      case PoligrancSearchActionType.POLIGRANC_LOAD_SUCCESS:
        return {
          ...state,
          poligrancLoading: false,
          poligrancResults: action.payload,
        };
      
      case PoligrancSearchActionType.POLIGRANC_LOAD_FAILURE:
        return {
          ...state,
          poligrancLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "POLIGRANC_LOADING"; payload: any }
  | { type: "POLIGRANC_LOAD_SUCCESS"; payload: any }
  | { type: "POLIGRANC_LOAD_FAILURE"; payload: string };
  
  export default PoligrancSearchReducer;