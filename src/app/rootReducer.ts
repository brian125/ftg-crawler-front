import { combineReducers } from "@reduxjs/toolkit";
import PoliSearchReducer from "../reducers/PoliSearchReducer";
import UdeASearchReducer from "../reducers/UdeASearchReducer";
import ItmSearchReducer from "../reducers/ItmSearchReducer";
import SanbuenaSearchReducer from "../reducers/SanbuenaSearchReducer";
import PoligrancSearchReducer from "../reducers/PoligrancSearchReducer";
import CeipaSearchReducer from "../reducers/CeipaSearchReducer";
import ColegiaturaSearchReducer from "../reducers/ColegiaturaSearchReducer";
import UnalSearchReducer from "../reducers/UnalSearchReducer";
import LoginReducer from "../reducers/LoginReducer";

const rootReducer = () => {
  return combineReducers({
    poliResults: PoliSearchReducer,
    udeaResults: UdeASearchReducer,
    itmResults: ItmSearchReducer,
    sanbuenaResults: SanbuenaSearchReducer,
    poligrancResults: PoligrancSearchReducer,
    ceipaResults: CeipaSearchReducer,
    colegiaturaResults: ColegiaturaSearchReducer,
    unalResults: UnalSearchReducer,
    loginResults: LoginReducer,
  });
};

export default rootReducer;
