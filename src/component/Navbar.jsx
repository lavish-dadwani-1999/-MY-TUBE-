import React from 'react'
import {Navbar,Nav,NavItem} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import config from "../config"
import {logout_user} from "../redux/action/useraction"
import { connect } from 'react-redux';


const M_tubeNavbar = ({user,logout_user}) => {
  console.log(user)
    const handellogouterr=err=>console.error(err)

const handellogoutsucess=res=>{
  alert("Logged Out successfully")
  logout_user()
    }
    return (
      
        
          <Navbar color="light" light expand="md" className="nav1">
            <Link to="/" >Home</Link>
          <Nav className="ml-auto subnav" navbar  >

              {!user  ? <NavItem>
           <NavLink to="/login" >Login</NavLink>
            </NavItem> 
              
          : <>
            <NavItem>
              <NavLink style={{marginRight:"15px"}} to="/profile"> My Profile</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink  style={{marginRight:"15px"}} to="/playlist" >my playlist</NavLink>
               </NavItem>
            <GoogleLogout
             style={{marginRight:"15px"}}
            clientId={config.CLIENT_ID}
            buttonText="LOGOUT"
            onLogoutSuccess={handellogoutsucess}
            onFailure={handellogouterr}/>
            </>}
           
            
            
          </Nav>
        
      </Navbar> 
    )
}

const mapstatestore = statestore=>{
  return{
    user:statestore.userstate.users
  }
}

export default connect(mapstatestore,{logout_user})(M_tubeNavbar)

// playlist
// profile