import { SET_SEARCH_VIDEOS, SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from "../actiontype";

const initialstate = {
  videos: null,
  searchVideos:null,
  toggleisfetching: false,
};

const videoreducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_VIDEOS:
      return { ...state, videos: payload };
      case SET_SEARCH_VIDEOS:
        return { ...state, searchVideos: payload };
    case TOGGLE_VIDEO_FETCHING_STATE:
      return { ...state, toggleisfetching: !state.toggleisfetching };
    default:
      return state;
  }
};

export default videoreducer;
