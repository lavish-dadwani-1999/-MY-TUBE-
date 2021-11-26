import {SET_COMMENTS, SET_CURRENT_VIDEOS,TOGGLE_CURRENT_VIDEO_FETCHING_STATE} from "../actiontype";
import axios from "axios";
import config from "../../config";

export const set_current_videos =
  (videoid) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
      });
      const response = await axios(`${config.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${config.API_KEY}&id=${videoid}`
      );
      console.log(response.data);
      dispatch({ type: SET_CURRENT_VIDEOS, payload: response.data });
    } catch (err) {
      console.log(err.message);
    } finally {
      dispatch({
        type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
      });
    }
  };

  export const fetchcomments =
  (videoid) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
      });
      const response = await axios(`${config.BASE_URL}/commentThreads?part=snippet,replies&key=${config.API_KEY}&videoId=${videoid}`
      );
      console.log(response.data);
      dispatch({ type: SET_COMMENTS, payload: response.data });
    } catch (err) {
      console.log(err.message);
    } finally {
      dispatch({
        type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE,
      });
    }
  };
