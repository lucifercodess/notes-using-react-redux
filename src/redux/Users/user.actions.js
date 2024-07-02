import axios from "axios";
import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user.types";

export const getUser = (obj) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER_LOADING,
  });
  try {
    let data = await axios.post("http://localhost:8200/user/login", {
      method: "POST",
      data: obj,
    });
    let { message, token,status } = data.data;
    if(status == 1){
        dispatch({
            type: LOGIN_USER_SUCCESS,payload:token
          });
    }else{
        dispatch({
            type: LOGIN_USER_ERROR
        })
    }
    
  } catch (error) {
    console.log(error);
  }
};
