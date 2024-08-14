//DEPENDENCIES
import { combineReducers } from "@reduxjs/toolkit";

//REFERENCES
import auth from "../slices/auth/auth.slice";

const appReducer = combineReducers({
  auth: auth,
  // facilityManagers: facilityManagersReducer,
  // categorySettings: categorySettingReducer,
  // defectSubCategory: defectSubCategoryReducer,
  // ppmRegulation: ppmRegulationReducer,
  // reportPrefix: reportPrefixReducer,
  // userAccessPermission: userAccessPermissionReducer,
  // associationSetting: associationSettingReducer,
  // competenciesSetting: competenciesSettingReducer,
  // operative: operativeReducer,
  // role: roleReducer,
  // profile: profileReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

//Exporting root reducer by combining all module reducers
export default rootReducer;
