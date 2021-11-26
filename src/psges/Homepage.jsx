import { Button } from 'reactstrap'
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect} from "react-router-dom"
import Videolist from '../component/Videolist'
import { set_videos } from '../redux/action/videoaction'
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'

class Homepage extends Component {

  state={
    nextPageToken:false
  }
 
  componentWillMount () {
    nProgress.start()
  }

    
componentDidMount(){
this.props.set_videos()
nProgress.done()
// if(this.state.nextPageToken === true){
//   this.props.set_videos(nextPageToken)
// }
}

handelclick1=()=>{
  this.setState({nextPageToken:false})
  const prevpagetoken = this.props.videos.prevPageToken
 if(prevpagetoken !== undefined){
  this.props.set_videos(prevpagetoken)
 
 }
}

handelclick = (e)=>{
  this.setState({nextPageToken:true})
  const nextpagetoken = this.props.videos.nextPageToken
  this.props.set_videos(nextpagetoken)
 
}
  render()
    
    {console.log(this.props.videos)
        
            if( !this.props.user){ return <Redirect to="/login" />}
            return this.props.videos ? <>
            <h1 style={{display:"flex",justifyContent:"flex-start",marginLeft:"25px"}} >TRENDING VIDEOS</h1>
             <Videolist videos={this.props.videos.items} />
            {this.props.videos.prevPageToken !== undefined ?  <Button onClick={this.handelclick1} style={{margin:'15px'}} color="success">previous page</Button> :null} 
             <Button onClick={this.handelclick} style={{margin:'15px'}} color="success">next page</Button>
          </>: <h1>loading...</h1>
            
    }
    
}
const mapstatestore = statestore=>{
    return{
      user:statestore.userstate.users,
      videos:statestore.videostate.videos
    }
  }
export default connect(mapstatestore,{set_videos})(Homepage)
