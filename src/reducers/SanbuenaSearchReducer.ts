import { SanbuenaSearchActionType } from "../actions/action-types/SanbuenaSearchActionType";
import { IStateSanbuenaSearch } from "../models/IStateSanbuenaSearch";


const initialState: IStateSanbuenaSearch = {
    sanbuenaLoading: false,
    sanbuenaResults: undefined,
    error: "",
  };

  const SanbuenaSearchReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case SanbuenaSearchActionType.SANBUENA_LOADING:
        return {
          ...state,
          sanbuenaLoading: true,
        };
      case SanbuenaSearchActionType.SANBUENA_LOAD_SUCCESS:
        return {
          ...state,
          sanbuenaLoading: false,
          sanbuenaResults: action.payload,
        };
      
      case SanbuenaSearchActionType.SANBUENA_LOAD_FAILURE:
        return {
          ...state,
          sanbuenaLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "SANBUENA_LOADING"; payload: any }
  | { type: "SANBUENA_LOAD_SUCCESS"; payload: any }
  | { type: "SANBUENA_LOAD_FAILURE"; payload: string };
  
  export default SanbuenaSearchReducer;