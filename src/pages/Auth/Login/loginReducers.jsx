import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login:[],
    isLoading:false,
    error:'',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

        loginLoading:(state) => {
            state.isLoading = true;
        },

        loginSuccess:(state, {payload})=> {
            state.login = payload;
            state.isLoading = false
        },

        loginFail:(state, {payload})=> {
            state.isLoading = false;
            state.error = payload
        }
  },
})

export const { loginLoading, loginSuccess, loginFail } = loginSlice.actions

export default loginSlice.reducer