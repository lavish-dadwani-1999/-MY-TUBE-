import {combineReducers} from "redux"
import channelreducer from "./reducer/channelreducer"
import currentvideoreducer from "./reducer/currentvideoreducer"
import playlistreducer from "./reducer/playlistreducer"
import userreducer from "./reducer/userreducer"
import videoreducer from "./reducer/videoreducer"

const reducer =combineReducers({
    userstate:userreducer,
    videostate:videoreducer,
    currentvideostate:currentvideoreducer,
    playliststate:playlistreducer,
    channelstate:channelreducer
})

export default reducer