const API_URL = process.env.REACT_APP_API_URL || "api";

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/users/signin/`;
export const REGISTER_URL = `${API_URL}/users/signup`;
export const REQUEST_PASSWORD_URL = `${API_URL}/users/forgot-password`;
export const VERIFY_CODE_URL = `${API_URL}/users/verify-code`;
export const RESET_PASSWORD_URL = `${API_URL}/users/change-password-after-code-verification`;

// ********************** FACILITY MANAGER **********************

export const GET_FACILITY_MANAGER_DETAILED_LISTING = `${API_URL}/facilityManagers/getFacilityManagersWithFullDetails`
export const CREATE_FACILITY_MANAGER = `${API_URL}/facilityManagers/createFacilityManager`
export const UPDATE_FACILITY_MANAGER = `${API_URL}/facilityManagers/updateFacilityManager`
export const GET_BUILDING_LISTING_DETAILS = `${API_URL}/buildings/getBuildingsWithFullDetails`
export const GET_REFERENCES = `${API_URL}/inspectionJobs/getReferences`

// ********************** ACCESSIBILITY **********************

export const CREATE_ACCESSIBILITY = `${API_URL}/accessibilities/createAccessibility`
export const GET_ACCESSIBILITY_LISTING = `${API_URL}/accessibilities/getAccessibilitysList`
export const UPDATE_ACCESSIBILITY = `${API_URL}/accessibilities/updateAccessibility`
export const REMOVE_ACCESSIBILITY = `${API_URL}/accessibilities/removeAccessibility`

// ********************** FIRE BARRIER **********************
export const GET_FIRE_BARRIER_LISTING = `${API_URL}/firebarriers/getFireBarriersList`
export const UPDATE_FIRE_BARRIER = `${API_URL}/firebarriers/updateFireBarrier`

// *************************INSTALLATION*************************

export const GET_INSTALLATION_LISTING = `${API_URL}/installations/getInstallationsList`
export const UPDATE_INSTALLATION = `${API_URL}/installations/updateInstallation`

// *************************DAMPER TYPE*************************

export const GET_DAMPER_TYPE_LISTING = `${API_URL}/damperTypes/getDamperTypesList`
export const UPDATE_DAMPER_TYPE = `${API_URL}/damperTypes/updateDamperType`

// *************************DUCT TYPE*************************

export const GET_DUCT_TYPE_LISTING = `${API_URL}/ductTypes/getDuctTypesList`
export const UPDATE_DUCT_TYPE = `${API_URL}/ductTypes/updateDuctType`

// ************************ DEFECT SUB CATEGORY *************

export const GET_DEFECT_SUB_CATEGORIES_LISTING = `${API_URL}/defectCategories/getDefectCategorysList`
export const UPDATE_DEFECT_SUB_CATEGORY = `${API_URL}/defectCategories/updateDefectCategory`
export const REMOVE_DEFECT_SUB_CATEGORY = `${API_URL}/defectCategories/deleteSubCategoryDefect`


// ************************ PPM *************

export const CREATE_PPM = `${API_URL}/mobileGuidanceText/createMobileGuidanceText`
export const GET_PPM_LISTING = `${API_URL}/mobileGuidanceText/getMobileGuidanceText`
export const UPDATE_PPM =  `${API_URL}/mobileGuidanceText/updateMobileGuidanceText`

// ******************************** Guidance ********************************

export const GET_GUIDANCE_LISTING = `${API_URL}/guidanceReportPrefixs/getGuidanceReportPrefixsWithFullDetails`
export const UPDATE_GUIDANCE =  `${API_URL}/guidanceReportPrefixs/updateGuidanceReportPrefix`

// ******************************** Service ********************************

export const GET_SERVICE_LISTING = `${API_URL}/serviceReportPrefixs/getServiceReportPrefixsWithFullDetails`
export const UPDATE_SERVICE = `${API_URL}/serviceReportPrefixs/updateServiceReportPrefix`

// ******************************** Disclaimer ********************************

export const GET_DISCLAIMER_LISTING = `${API_URL}/disclaimersReportPrefixs/getDisclaimersReportPrefixsWithFullDetails`
export const UPDATE_DISCLAIMER =  `${API_URL}/disclaimersReportPrefixs/updateDisclaimersReportPrefix`

// ******************************** User Access Permission ********************************

export const GET_OPERATIVE_TYPES = `${API_URL}/operativeTypes/getOperativeTypesList`
export const DELETE_OPERATIVE_TYPE = `${API_URL}/operativeTypes/removeOperativeType`
export const GET_ALL_MODULES = `${API_URL}/modules/getModulesList`
export const GET_OPERATIVE_ALL_PERMISSIONS = `${API_URL}/operativePermissions/getOperativeAllPermissions`
export const UPDATE_OPERATIVE_TYPE_PERMISSION = `${API_URL}/operativePermissions/updateOperativePermission`

// ******************************** Association Setting ********************************

export const UPDATE_ASSOCIATION = `${API_URL}/associations/updateAssociation`
export const CREATE_ASSOCIATION = `${API_URL}/associations/createAssociation`
export const GET_ASSOCIATION = `${API_URL}/associations/getAssociationList`
export const DELETE_ASSOCIATION = `${API_URL}/associations/deleteAssociation`
export const UPLOAD_ASSOCIATION_IMAGE = `${API_URL}/associations/uploadSingleFile`


// ******************************* Competencies Setting *******************************

export const CREATE_COMPETENCIES = `${API_URL}/competencies/createCompetencies`
export const UPDATE_COMPETENCIES = `${API_URL}/competencies/updateCompetencies`
export const GET_COMPETENCIES = `${API_URL}/competencies/getCompetenciesList`
export const DELETE_COMPETENCIES = `${API_URL}/competencies/deleteCompetencies`
export const UPLOAD_COMPETENCIES_IMAGE = `${API_URL}/competencies/uploadSingleFile`



