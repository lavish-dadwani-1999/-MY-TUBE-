import { LOGOUT_USER, SET_USER, TOGGLE_AUTH_STATE } from "../actiontype"

export const set_user = user=> {
    return{
        type:SET_USER,
        payload:user
    }
}

export const toggle_auth_state = ()=>{
    return{
        type:TOGGLE_AUTH_STATE
        
}
}

export const logout_user =()=> {
    return{
        type:LOGOUT_USER,
    }
}