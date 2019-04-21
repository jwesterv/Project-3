import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// import privateHelpers from './helpers/auth.helper'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} 
    render={(props) => (
      localStorage.getItem("token")
    // ,privateHelpers.isLoggedIn()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/auth/login',
        state: { from: props.location }
      }} />
  )} />
)
