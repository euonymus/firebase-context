import React from 'react'
import { withFirebase } from '../../../../src'
import { withAuthUser } from './context'

const withAnonymous = Component => {
  class WithAnonymous extends React.Component {
    state = {
      authUser: null
    }

    componentDidMount() {
      let authUser = null
      if (this.props.authUser) {
        authUser = this.props.authUser
      } else {
        this.listener = this.props.firebase.doSignInAnonymously().then(
          authUser => {
            authUser = this.props.authUser
          })
      }
      this.setState({ authUser })
    }

    componentWillUnmount() {
      if (this.listener) {
        // this.listener()
        this.listener = null
      }
    }

    render() {
      return this.state.authUser ? <Component {...this.props} voting_id={this.state.authUser.uid} /> : null
    }
  }

  return withFirebase(withAuthUser(WithAnonymous))
}

export default withAnonymous
