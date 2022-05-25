import GeneralAction from '../Actions/GeneralAction';

const initialState = {
  lang: 0,
  isFirstTimeUse: true,
  uid: '',
  user: {
    fullname: '',
    email: '',
    phone: '',
  },
  image: '',
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction.types.SET_FIRST_TIME_USE:
      return {...state, isFirstTimeUse: action.payload};
    case GeneralAction.types.SET_LANG:
      return {...state, lang: action.payload};
    case GeneralAction.types.SET_UID:
      return {...state, uid: action.payload};
    case GeneralAction.types.SET_USER:
      return {...state, user: action.payload};
    case GeneralAction.types.SET_IMAGE:
      return {...state, image: action.payload};
    default:
      return state;
  }
};

export default GeneralReducer;
