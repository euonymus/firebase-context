// react
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// component
import Header from './components/header';
import AnonymousLogin from './pages/anonymous-login'
import Login from './pages/login'
import Signup from './pages/signup'
import Loggedin from './pages/logged-in'
import NotAuthorized from './pages/not-authorized'
import EmailVerified from './pages/email-verified'


class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className='main-content'>
          <Switch>
            <Route path='/anonymous-login' component={AnonymousLogin}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/logged-in' component={Loggedin}/>
            <Route path='/not-authorized' component={NotAuthorized}/>
            <Route path='/email-verified' component={EmailVerified}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRoutes
