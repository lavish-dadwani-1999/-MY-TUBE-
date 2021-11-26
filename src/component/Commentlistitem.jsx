
import React, { Component } from 'react'
import { Button,Collapse } from 'reactstrap'
import Replieslist from './Replieslist'

class Commentlistitem extends Component {
state={
    isOpen:false
}
    render(){
        const {snippet} = this.props.comment
        console.log(this.props.comment,snippet.totalReplyCount)
        
        const {snippet:{topLevelComment},replies}=this.props.comment
        return (
            <div style={{display:'flex',alignItems:'flex-start',marginLeft:"30px",flexDirection:'column',margin:'2px'}} >
                <div style={{display:'flex'}}>
            <img src={topLevelComment.snippet.authorProfileImageUrl} alt="authorProfileImageUrl" style={{borderRadius:"50%",margin:'15px'}} />
            <div>
                <h6 style={{display:'flex'}}>{topLevelComment.snippet.authorDisplayName}</h6>
               <p>{topLevelComment.snippet.textOriginal}</p>
               
                </div>
                </div>
               {snippet.totalReplyCount !== 0 ? <>
                <Button style={{margin:'0px',marginLeft:'15px'}} color="primary" 
                onClick={()=>this.setState({isOpen: !this.state.isOpen})} >{this.state.isOpen ? "close replies" :"show replies"}</Button>
          <Collapse isOpen={this.state.isOpen}>
            {snippet.totalReplyCount !== 0 ?  <Replieslist replies={replies.comments} />:null}
          </Collapse>
          </>:null}
            </div>
        )
    }
}

export default Commentlistitem
