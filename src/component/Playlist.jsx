import React from 'react'

const Playlist = ({playlist}) => {
    return (
        <div>
            {playlist.length === 0 ? <h1>NO Playlist Found</h1>: playlist.map((play)=><div key={play.id}><h2>Title : {play.snippet.title}</h2>
            <h2>Title : {play.snippet.channelTitle}</h2>
            <h2>Title : {play.snippet.description}</h2>
            <img src={play.snippet.thumbnails.high.url} alt="" />
            <h4>publish {play.snippet.publishedAt}</h4></div>) }
        </div>
    )
}

export default Playlist
