import { ColegiaturaSearchActionType } from "../actions/action-types/ColegiaturaSearchActionType";
import { IStateColegiaturaSearch } from "../models/IStateColegiaturaSearch";

const initialState: IStateColegiaturaSearch = {
    colegiaturaLoading: false,
    colegiaturaResults: undefined,
    error: "",
  };

  const ColegiaturaSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case ColegiaturaSearchActionType.COLEGIATURA_LOADING:
        return {
          ...state,
          colegiaturaLoading: true,
        };
      case ColegiaturaSearchActionType.COLEGIATURA_LOAD_SUCCESS:
        return {
          ...state,
          colegiaturaLoading: false,
          colegiaturaResults: action.payload,
        };
      
      case ColegiaturaSearchActionType.COLEGIATURA_LOAD_FAILURE:
        return {
          ...state,
          colegiaturaLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "COLEGIATURA_LOADING"; payload: any }
  | { type: "COLEGIATURA_LOAD_SUCCESS"; payload: any }
  | { type: "COLEGIATURA_LOAD_FAILURE"; payload: string };
  
  export default ColegiaturaSearchReducer;