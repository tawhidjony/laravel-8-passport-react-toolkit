import axios from 'axios'
import {loginLoading, loginSuccess, loginFail} from './loginReducers'

export const loginActionSuccess = (data) => async (dispatch) => {
    dispatch(loginLoading())
    try{
        
       await axios.post('login', data)
          .then((res) => {
              if(res.data.token){
                localStorage.setItem('token', res.data.token);
                sessionStorage.setItem('token2', res.data.token);
              }
              dispatch(loginSuccess(res.data))
          })
          .catch((error) => {
            dispatch(loginFail(error))
          });
    }catch(error){
        dispatch(loginFail(error.message))
    }
}