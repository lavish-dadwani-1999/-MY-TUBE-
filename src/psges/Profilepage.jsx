
import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Link,Redirect} from 'react-router-dom'
import { Jumbotron ,Button} from 'reactstrap'
import { set_subscription } from '../redux/action/channelaction'
import 'nprogress/nprogress.css'
import nProgress from 'nprogress'
class Profilepage extends Component {
  componentWillMount () {
    nProgress.start()
  }

  componentDidMount(){
    this.props.set_subscription()
    nProgress.done()
  }
  render(){
    if(!this.props.user) return <Redirect to="/login" />
    return (
      <div>
      <Jumbotron>
          <img src={this.props.user.imageUrl} alt="" style={{borderRadius:'50%'}} />
        <h1 className="display-3">{this.props.user.name}</h1>
        <p className="lead">{this.props.user.email}</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
         <Link to="/playlist"> <Button color="primary">Playlist</Button></Link>
        </p>
      </Jumbotron>
      <h3>All subscription</h3>
      <div className="content" >

      {this.props.subscrib ? this.props.subscrib.items.map((item)=>
      <div key={item.id} >
      <img style={{height:"200px",width:"200px"}} src={item.snippet.thumbnails.high.url} alt="" />
      <h3>{item.snippet.title}</h3>
      <h5>{item.snippet.publishedAt}</h5>
      
      </div>
      ) : <h1>Loading ..</h1>}
      </div>
    </div>
  )
  }
}
const mapstatestore = statestore=>{
    return{
        user:statestore.userstate.users,
        subscrib:statestore.channelstate.subscription
    }
}


export default connect(mapstatestore,{set_subscription})(Profilepage)
