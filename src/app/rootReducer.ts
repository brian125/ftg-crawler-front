import { combineReducers } from "@reduxjs/toolkit";
import PoliSearchReducer from "../reducers/PoliSearchReducer";
import UdeASearchReducer from "../reducers/UdeASearchReducer";
import ItmSearchReducer from "../reducers/ItmSearchReducer";
import PoligrancSearchReducer from "../reducers/PoligrancSearchReducer";
import CeipaSearchReducer from "../reducers/CeipaSearchReducer";
import ColegiaturaSearchReducer from "../reducers/ColegiaturaSearchReducer";
import UnalSearchReducer from "../reducers/UnalSearchReducer";
import LoginReducer from "../reducers/LoginReducer";
import HostReducer from "../reducers/LoginReducer copy";

const rootReducer = () => {
  return combineReducers({
    poliResults: PoliSearchReducer,
    udeaResults: UdeASearchReducer,
    itmResults: ItmSearchReducer,
    poligrancResults: PoligrancSearchReducer,
    ceipaResults: CeipaSearchReducer,
    colegiaturaResults: ColegiaturaSearchReducer,
    unalResults: UnalSearchReducer,
    loginResults: LoginReducer,
    hostResults: HostReducer
  });
};

export default rootReducer;
