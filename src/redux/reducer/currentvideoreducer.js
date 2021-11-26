import { SET_COMMENTS, SET_CURRENT_VIDEOS, TOGGLE_CURRENT_VIDEO_FETCHING_STATE } from "../actiontype";

const initialstate = {
  video: null,
  togglecurrentvideofetching: false,
  comments:null
};

const currentvideoreducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_VIDEOS:
      return { ...state, video: payload };
    case TOGGLE_CURRENT_VIDEO_FETCHING_STATE:
      return { ...state, togglecurrentvideofetching: !state.togglecurrentvideofetching };
      case SET_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};

export default currentvideoreducer;
