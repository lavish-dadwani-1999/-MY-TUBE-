import axios from "axios";
import { SET_CHANNEL, SET_SUBSCRIBTION, TOGGLE_CHANNEL_FETCHING_STATE } from "../actiontype";
import config from "../../config";


// 'https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed


export const set_channel =
() =>
async (dispatch,getState) => {
    const accesstoken = getState().userstate.users.access_token  
  try {
    dispatch({
      type: TOGGLE_CHANNEL_FETCHING_STATE,
    });
    const response = await axios(`${config.BASE_URL}/channels?part=snippet&mine=true&key=${config.API_KEY}`,{
        headers:{
          'Authorization': `Bearer ${accesstoken}`,
          'Accept': 'application/json'
        }
    });



    console.log(response.data);
    dispatch({ type: SET_CHANNEL, payload: response.data });
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({
      type: TOGGLE_CHANNEL_FETCHING_STATE,
    });
  }
};



// 'https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&maxResults=20&mine=true&key=[YOUR_API_KEY]' \
// --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
// --header 'Accept: application/json' \
// --compressed


export const set_subscription =() =>
async (dispatch,getState) => {
    const accesstoken = getState().userstate.users.access_token  
    console.log(accesstoken)
  try {
    dispatch({
      type: TOGGLE_CHANNEL_FETCHING_STATE,
    });
    const {data} = await axios(`${config.BASE_URL}/subscriptions?part=snippet&maxResults=20&mine=true&key=${config.API_KEY}`,{
        headers:{
          'Authorization': `Bearer ${accesstoken}`,
          'Accept': 'application/json'
        }
    });



    console.log(data);
    dispatch({ type:SET_SUBSCRIBTION, payload:data})
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({
      type: TOGGLE_CHANNEL_FETCHING_STATE,
    });
  }
};