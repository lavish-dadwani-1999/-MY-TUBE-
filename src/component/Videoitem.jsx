import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const Videoitem = ({videos, mode}) => {
console.log(mode,("id",videos.id.videoId),"id2",videos.id)
const decriptionfillter=(description,lettercount)=>{
    return description.length <= lettercount ? description : `${description.slice(0,lettercount)}...`
}
    return (
        
          <Card style={{flexBasis:"300px",marginBottom:"10px", marginRight:"20px"}} >
          <Link to={`/video/${ mode === "search" ? videos.id.videoId: videos.id}`} style={{color:"inherit"}}>
        <CardImg top width="100%" src={videos.snippet.thumbnails.high.url} alt="videos image" />
        <CardBody>
          <CardTitle tag="h5">Title: {videos.snippet.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">channel: {videos.snippet.channelTitle}</CardSubtitle>
          <CardText>Decription: {decriptionfillter(videos.snippet.description,100)}</CardText>
        </CardBody>
        </Link>
      </Card>
        
    )
}

export default Videoitem
