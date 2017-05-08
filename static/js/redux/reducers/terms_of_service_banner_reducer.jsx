import * as ActionTypes from '../constants/actionTypes';

const termsOfServiceBanner = (state = { isVisible: false }, action) => {
  switch (action.type) {
    case ActionTypes.TRIGGER_TOS_BANNER:
      return { isVisible: true };
    default:
      return state;
  }
};

export default termsOfServiceBanner;
