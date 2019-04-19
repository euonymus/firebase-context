import React from 'react'
import AuthUserContext from './context'
import { withFirebase } from '../../../../src'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthStateChanged(
        authUser => { return authUser },
        authUser => {
          this.setState({ authUser })
        },
        () => {
          this.setState({ authUser: null })
        },
      )
    }

    componentWillUnmount() {
      // To avoid memory leaks
      this.listener()
    }

    render() {
      if (!this.state) {
        return null
      }
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export default withAuthentication
