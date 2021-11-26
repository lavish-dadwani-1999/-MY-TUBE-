import {
  SET_CHANNEL,
  SET_SUBSCRIBTION,
  TOGGLE_CHANNEL_FETCHING_STATE,
} from "../actiontype";

const initialstate = {
  channel: null,
  togglechannelfetching: false,
  subscription: null,
};

const channelreducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CHANNEL:
      return { ...state, channel: payload };
    case SET_SUBSCRIBTION:
      return { ...state, subscription: payload };
    case TOGGLE_CHANNEL_FETCHING_STATE:
      return { ...state, togglechannelfetching: !state.togglechannelfetching };

    default:
      return state;
  }
};

export default channelreducer;
