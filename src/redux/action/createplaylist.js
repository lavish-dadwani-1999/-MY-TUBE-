import axios from "axios";
import { SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING_STATE } from "../actiontype";
import config from "../../config";
   
// curl \
//   'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=25&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed

// `${config.BASE_URL}/playlists?part=snippet&key=${
//   config.API_KEY
// }&mine=true&maxResults=20${
//   pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
// }`,
// {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     Accept: "application/json"
//   }
// }


export const fetch_playlist =
(pagetoken = "") =>
async (dispatch,getState) => {
    const accesstoken = getState().userstate.users.access_token  
    console.log(accesstoken)
  try {
    dispatch({type:SET_PLAYLIST,payload:null})
    dispatch({
      type: TOGGLE_PLAYLIST_FETCHING_STATE,
    });
    const response = await axios(
      `${config.BASE_URL}/playlists?part=snippet&maxResults=20&mine=true&key=${
        config.API_KEY
      }${
        pagetoken.length !== 0 ? "&pagetoken=" + pagetoken : ""
      }`,{
          headers:{
            'Authorization': `Bearer ${accesstoken}`,
            'Accept': 'application/json'
          }
      }
    );
    console.log(response.data);
    dispatch({type:SET_PLAYLIST,payload:response.data});
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({
      type: TOGGLE_PLAYLIST_FETCHING_STATE,
    });
  }
};




export const create_playlist =
(playlist) =>
async (dispatch,getState) => {
    const accesstoken = getState().userstate.users.access_token  
  try {
   
    dispatch({
      type: TOGGLE_PLAYLIST_FETCHING_STATE,
    });
    const response = await axios.post(
      `${config.BASE_URL}/playlists?part=snippet,status&key=${
        config.API_KEY
      }`,playlist,{
         headers:{
            'Authorization': `Bearer ${accesstoken}`,
            'Accept': 'application/json'
          }
      }
    );
    const playlistobj = getState().playliststate.playlist
    playlistobj.items.push(response.data)
    console.log(response.data);
    dispatch({type:SET_PLAYLIST,payload:{...playlistobj}});
  } catch (err) {
    console.log(err.message);
  } finally {
    dispatch({
      type: TOGGLE_PLAYLIST_FETCHING_STATE,
    });
  }
};
