import { configureStore } from '@reduxjs/toolkit'

import loginReducers from '../pages/Auth/Login/loginReducers'

const store = configureStore({
    reducer:{
        login:loginReducers,
    },
})

export default store