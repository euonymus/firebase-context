// react
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../../src'
import { withAuthUser } from '../providers/session'
import Button from '@material-ui/core/Button'

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logged-in">Loggedin</Link></li>
          <li><Link to="/not-authorized">Not Authorized</Link></li>
  { !this.props.authUser && (
          <Fragment>
            <li><Link to="/anonymous-login">Anonymous Login</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </Fragment>
  )}
        </ul>
  { this.props.authUser && (
        <Button color="inherit" onClick={this.props.firebase.doSignOut}>Logout</Button>
  )}
      </div>
    )
  }
}

export default withAuthUser(withFirebase(Header))
