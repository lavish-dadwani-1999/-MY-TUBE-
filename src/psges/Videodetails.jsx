import React, { Component } from 'react'
import { connect } from 'react-redux'
import Videoplayer from '../component/Videoplayer'
import { fetchcomments, set_current_videos } from '../redux/action/Currentvideoaction'
import Comments from "../component/Comments"
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'



 class Videodetails extends Component {

    componentWillMount () {
        nProgress.start()
      }
    
componentDidMount(){
    console.log(this.props.currentvideo)
    this.props.fetchcomments(this.props.match.params.videoid)
    this.props.set_current_videos(this.props.match.params.videoid)
    nProgress.done()
}


    render() {
        console.log(this.props.comments)
        return (
            <div>
                {this.props.currentvideo ? <Videoplayer video={this.props.currentvideo.items[0]} />:<h1>Loading video ..</h1>}
                {this.props.comments ? (<Comments comments={this.props.comments.items}/>):<h1>Loading video ..</h1>}
            </div>
        )
    }
}

const mapstatestore =statestore=>{
    return{
        currentvideo:statestore.currentvideostate.video,
        user:statestore.userstate.users,
        comments:statestore.currentvideostate.comments

    }
}

export default connect(mapstatestore,{fetchcomments,set_current_videos})(Videodetails)
