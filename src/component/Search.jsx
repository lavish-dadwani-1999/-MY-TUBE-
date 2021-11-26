import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Search extends Component {
    state={
        serchquery:""
    }

    handelsubmit=(e)=>{
        e.preventDefault()
        console.log("submit")
        this.props.history.push(`/search/${this.state.serchquery}`)
    }
    render() {
        return (
            <form onSubmit={this.handelsubmit} className="input-group mb-3" style={{width:'60%',margin:'15px auto'}} >
  <input type="text" style={{padding:' 10px 15px',outline:"none"}} className="form-control" placeholder="Search Videos" aria-label="Recipient's username" aria-describedby="button-addon2" name="serchqurey" value={this.state.serchquery}
   onChange={(e)=> this.setState({serchquery:e.target.value})} />
  <div className="input-group-append">
    <input className="btn btn-outline-secondary"style={{padding:' 10px 15px',marginLeft:"15px"}} type="submit" id="input-addon2" value="Submit" />
  </div> 
         </form>

        )
    }
}
export default withRouter(Search)