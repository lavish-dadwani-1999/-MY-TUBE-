import React from 'react'

const Replieslist = ({replies}) => {
    return (
        <>
        {replies.map((replies)=>( <div key={replies.id} style={{display:'flex',alignItems:'flex-start',marginLeft:"30px",flexDirection:'column',margin:'2px'}} >
                <div style={{display:'flex'}}>
            <img src={replies.snippet.authorProfileImageUrl} alt="authorProfileImageUrl" style={{borderRadius:"50%",margin:'15px'}} />
            <div>
                <h6 style={{display:'flex'}}>{replies.snippet.authorDisplayName}</h6>
               <p>{replies.snippet.textOriginal}</p>
               
                </div>
                </div></div>))} 
        </>
    )
}

export default Replieslist
