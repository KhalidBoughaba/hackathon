import StorageService from '../Storage/GeneralStorage';

const types = {
  SET_FIRST_TIME_USE: 'SET_FIRST_TIME_USE',
  SET_LANG: 'SET_LNG',
  SET_UID: 'SET_UID',
  SET_USER: 'SET_USER',
  SET_IMAGE: 'SET_IMAGE',
};
// SET IS THE FIRST_TIME_USE
const setIsFirstTimeUse = () => {
  return {
    type: types.SET_FIRST_TIME_USE,
    payload: false,
  };
};
// SET LANG
const setLang = lang => {
  return {
    type: types.SET_LANG,
    payload: lang,
  };
};
// Set UID
const setUID = UID => {
  return {
    type: types.SET_UID,
    payload: UID,
  };
};
// Set IMAGE
const setImage = image => {
  return {
    type: types.SET_IMAGE,
    payload: image,
  };
};
// Set User Information
const setUSER = USER => {
  return {
    type: types.SET_USER,
    payload: USER,
  };
};

const appStart = () => {
  return (dispatch, getState) => {
    StorageService.getFirstTimeUse().then(isFirstTimeUse => {
      dispatch({
        type: types.SET_FIRST_TIME_USE,
        payload: isFirstTimeUse ? false : true,
      });
    });
    StorageService.getLang().then(lang => {
      if (lang) {
        dispatch({
          type: types.SET_LANG,
          payload: lang,
        });
      }
    });
    StorageService.getUid().then(uid => {
      if (uid) {
        dispatch({
          type: types.SET_UID,
          payload: uid,
        });
      }
    });
  };
};
export default {
  setIsFirstTimeUse,
  setLang,
  appStart,
  types,
  setUID,
  setUSER,
  setImage,
};
