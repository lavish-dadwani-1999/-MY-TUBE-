import React from 'react'
import Commentlistitem from './Commentlistitem'

const Comments = ({comments}) => {
    return (comments.map((comment)=><Commentlistitem key={comment.id} comment={comment} />)
    )
}

export default Comments
