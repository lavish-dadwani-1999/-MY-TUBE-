import { LOGOUT_USER, SET_USER, TOGGLE_AUTH_STATE } from "../actiontype";

const initialstate = {
  users: JSON.parse(localStorage.getItem("users")) || null,
  toggleauthstate: false,
};

const userreducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
        const user = JSON.stringify(payload)
        localStorage.setItem("users",user)
      return { ...state, users: payload };
    case TOGGLE_AUTH_STATE:
      return { ...state, toggleauthstate: !state.toggleauthstate };
      case LOGOUT_USER:
        localStorage.removeItem("users")
      return { ...state, users:null };
    default:
      return state;
  }
};

export default userreducer;
