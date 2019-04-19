import React from 'react';
import { Redirect } from 'react-router-dom'
import { withAuthUser, withAnonymous } from '../providers/session'

class AnonymousLogin extends React.Component {
  render() {
    if (this.props.authUser) {
      return <Redirect to="/logged-in" />
    }
    return (
      <div>
        <h1>You are anonymous user</h1>
      </div>
    )
  }
}

export default withAnonymous(withAuthUser(AnonymousLogin))
