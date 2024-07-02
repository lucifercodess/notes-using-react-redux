import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_LOADING, REGISTER_USER_SUCCESS } from "./user.types";

const initial_state = {
    token: null,
    auth: false,
    loading: false,
    error: false
}

export default function userReducer(state = initial_state, actions){
    const {type, payload} = actions; 

    switch(type){
        case LOGIN_USER_LOADING:{
            return{
                ...state, loading:true
            }
        }
        case LOGIN_USER_SUCCESS:{
            return {
                ...state, loading: false, error: false, token: payload, auth: true
            }
        } 
        case LOGIN_USER_ERROR:{
            return{
                ...state, loading:false, error: false
            }
        }

    

        
    }
}