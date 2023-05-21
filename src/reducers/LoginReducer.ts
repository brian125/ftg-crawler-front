import { LoginActionType } from "../actions/action-types/LoginActionType";
import { ILogin } from "../models/ILogin ";

const initialState: ILogin = {
    loginLoading: false,
    loginResults: false,
    error: "",
  };

  const LoginReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
      
      case LoginActionType.LOGIN_LOADING:
        return {
          ...state,
          loginLoading: true,
        };
      case LoginActionType.LOGIN_LOAD_SUCCESS:
        return {
          ...state,
          loginLoading: false,
          loginResults: action.payload,
        };
      
      case LoginActionType.LOGIN_LOAD_FAILURE:
        return {
          ...state,
          loginLoading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  
  export type ActionType =
  | { type: "LOGIN_LOADING"; payload: any }
  | { type: "LOGIN_LOAD_SUCCESS"; payload: any }
  | { type: "LOGIN_LOAD_FAILURE"; payload: string };
  
  export default LoginReducer;