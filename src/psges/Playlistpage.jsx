import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Redirect} from "react-router-dom"
import Playlist from '../component/Playlist'
import { set_channel } from '../redux/action/channelaction'

import { create_playlist, fetch_playlist } from '../redux/action/createplaylist'
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'

class Playlistpage extends Component {

  state={
    title:"",
    privacyStatus:"",
    description:""
  }
  componentWillMount () {
    nProgress.start()
  }

componentDidMount(){
this.props.fetch_playlist()
nProgress.done()
  
}
handelchange=e=>{
  this.setState({[e.target.name]:e.target.value})
}
handelsubmit=e=>{
  e.preventDefault();
  const {title,privacyStatus,description} = this.state 
  const playlist ={
    status:{
      privacyStatus
    },
    snippet:{
      title , description
    }
  }
this.props.create_playlist(playlist)
}
    render(){
        
            if( !this.props.user){ return <Redirect to="/login" />}

            return ( <> 
            <form onSubmit={this.handelsubmit} >
              <input type="text" name="title" value={this.state.title} placeholder="Enter Playlist Title" onChange={this.handelchange} />
              <input type="text" name="description" value={this.state.description} placeholder="Enter Playlist Decription" onChange={this.handelchange} />
              <select name="privacyStatus" value={this.state.privacyStatus} onChange={this.handelchange} >
                <option value="" disabled >Choose a statues</option>
                <option value="Public"  >Public</option>
                <option value="Unlisted"  >Unlisted</option>
                <option value="Private"  >Private</option>
              </select>
              <input type="submit" value="Create Playlist" />
            </form>
          {this.props.playlist ? <Playlist playlist={this.props.playlist.items} /> : <h1>loading...</h1> }
          </>)
            

        
    
    }
    
}

const mapstatestore = statestore=>{
    return{
      user:statestore.userstate.users,
      playlist:statestore.playliststate.playlist
    }
  }

export default connect(mapstatestore,{fetch_playlist,create_playlist,set_channel})(Playlistpage)


