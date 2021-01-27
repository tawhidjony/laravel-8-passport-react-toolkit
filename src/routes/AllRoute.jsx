import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Auth/Login/Login'
import Register from '../components/Register'

const AllRoute = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </div>
    )
}

export default AllRoute
