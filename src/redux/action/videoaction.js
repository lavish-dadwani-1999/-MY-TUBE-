import { SET_SEARCH_VIDEOS, SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from "../actiontype";
import axios from "axios";
import config from "../../config";

export const set_videos =
  (pagetoken = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOGGLE_VIDEO_FETCHING_STATE,
      });
      const response = await axios(
        `${config.BASE_URL}/videos?part=snippet&key=${
          config.API_KEY
        }&regionCode=IN&chart=mostPopular&maxResults=15&${
          pagetoken.length !== 0 ? "pageToken=" + pagetoken : ""
        }`
      );
      console.log(response.data);
      dispatch({type:SET_VIDEOS,payload:response.data});
    } catch (err) {
      console.log(err.message);
    } finally {
      dispatch({
        type: TOGGLE_VIDEO_FETCHING_STATE,
      });
    }
  };

// Search
// https://developers.google.com/youtube/v3/docs/search/list
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBYi8bOgYIs-97er6A7iTsfU-oW
// n6aazUQ&maxResults=10&q=sachin
  
export const search_videos =
(serchquery,pagetoken = "") =>
async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_VIDEO_FETCHING_STATE,
    });
    const response = await axios(
      `${config.BASE_URL}/search?part=snippet&key=${
        config.API_KEY
      }&regionCode=IN&chart=mostPopular&maxResults=15&${
        pagetoken.length !== 0 ? "pageToken=" + pagetoken : ""
      }&q=${serchquery}`
    );
    console.log(response.data);
    dispatch({type:SET_SEARCH_VIDEOS,payload:response.data});
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({
      type: TOGGLE_VIDEO_FETCHING_STATE,
    });
  }
};
