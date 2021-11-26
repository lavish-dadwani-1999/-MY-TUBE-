import React from 'react'
import { CardDeck } from 'reactstrap'
import Videoitem from './Videoitem'

const Videolist = ({videos , mode ="treanding"}) => {
    return (
        <>
            
        <CardDeck style={{display: "flex",flexDirection: "row",flexWrap:"wrap",justifyContent:"center",alignContent:"center"}}>
            {videos.map((video)=> <Videoitem key={mode === "search" ? video.id.videoId: video.id} videos={video} mode={mode} /> )}
        </CardDeck>
        </>
    )
}

export default Videolist
