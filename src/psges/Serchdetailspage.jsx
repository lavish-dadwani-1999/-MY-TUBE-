import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import Videolist from '../component/Videolist'
import { search_videos } from '../redux/action/videoaction'
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'
class Homepage extends Component {
  componentWillMount () {
    nProgress.start()
  }

componentDidMount(){
    console.log(this.props.match.params.searchquery)
    const searchquery=this.props.match.params.searchquery
    this.props.search_videos(searchquery)
    nProgress.done()
}

componentDidUpdate(preprops){
    const oldprop = preprops.match.params.searchquery
    const newprop = this.props.match.params.searchquery
    console.log(this.props.match.params.searchquery);
    console.log(oldprop,newprop);
    if(oldprop !== newprop){
        this.props.search_videos(newprop)
    }
}


handelclick1=()=>{
    const oldprop = this.props.match.params.searchquery
    const prevpagetoken = this.props.videos.prevPageToken
    
   if(prevpagetoken !== undefined){
    this.props.search_videos(oldprop,prevpagetoken)
   
   }
  }
  
  handelclick = (e)=>{
    const oldprop = this.props.match.params.searchquery
    
    const nextpagetoken = this.props.videos.nextPageToken
    this.props.search_videos(oldprop,nextpagetoken)
   
  }
    render(){
      
            return this.props.videos ? <> <Videolist videos={this.props.videos.items} mode="search" />
            {this.props.videos.prevPageToken !== undefined ?  <Button onClick={this.handelclick1} style={{margin:'15px'}} color="success">previous page</Button> :null} 
             <Button onClick={this.handelclick} style={{margin:'15px'}} color="success">next page</Button>
          
             </> : <h1>loading...</h1>

        
    
    }
    
}
const mapstatestore = statestore=>{
    return{
     
      videos:statestore.videostate.searchVideos
    }
  }
export default connect(mapstatestore,{search_videos})(Homepage)
