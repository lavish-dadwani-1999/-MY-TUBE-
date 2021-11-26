import { SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING_STATE } from "../actiontype";

const initialstate = {
  playlist: null,
  toggleisfetching: false,
};

const playlistreducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PLAYLIST:
      return { ...state, playlist: payload };
    case TOGGLE_PLAYLIST_FETCHING_STATE:
      return { ...state, toggleisfetching: !state.toggleisfetching };
    default:
      return state;
  }
};

export default playlistreducer;
