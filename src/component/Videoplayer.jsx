import React from 'react'
import { Jumbotron } from 'reactstrap'
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
const Videoplayer = ({video:{id,snippet,statistics }}) => {

  console.log(id)
const decriptionfillter=(description,lettercount)=>{
        return description.length <= lettercount ? description : `${description.slice(0,lettercount)}...`
}
const { viewCount, likeCount, dislikeCount } = statistics;
    
    return (
        <>
        <div className="ratio ratio-16x9">
      <iframe 
        src={`https://www.youtube.com/embed/${id}`}
         title="video player" 
         frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>

       </div>
       <Jumbotron>
        <h1 className="display-6">{snippet.title}</h1>
        <p className="lead">{snippet.channelTitle}</p>
        <p>{decriptionfillter(snippet.description,100)}</p>
        <hr className="my-2" />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} ><p style={{margin:'10px'}} className="lead">view:{viewCount}</p>
        <p style={{margin:'10px'}} className="lead"> <FaThumbsDown/> {dislikeCount}</p>
        <p style={{margin:'10px'}} className="lead"><FaThumbsUp/> {likeCount}</p></div>
      </Jumbotron>
       </>
    )
}

export default Videoplayer

// this videoplayer will be displayed in video details as a video player