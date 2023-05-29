import { HostActionType } from "../actions/action-types/HostActionType";
import { IHost } from "../models/IHost";

const initialState: IHost = {
    hostLoading: false,
    hostResults: undefined,
    error: "",
  };

  const HostReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case HostActionType.HOST_LOADING:
        return {
          ...state,
          hostLoading: true,
        };
      case HostActionType.HOST_LOAD_SUCCESS:
        return {
          ...state,
          hostLoading: false,
          hostResults: action.payload,
        };
      
      case HostActionType.HOST_LOAD_FAILURE:
        return {
          ...state,
          hostLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "HOST_LOADING"; payload: any }
  | { type: "HOST_LOAD_SUCCESS"; payload: any }
  | { type: "HOST_LOAD_FAILURE"; payload: string };
  
  export default HostReducer;