import React from 'react'
// import { withRouter, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../../../src'
import { withAuthUser } from './context'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthStateChanged(
        authUser => { return authUser },
        authUser => {
          // this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            this.props.history.push('/logged-in')
          }
        },
        () => this.props.history.push('/not-authorized')
      )
    }
    componentWillUnmount() {
      // this.listener()
      this.listener = null
    }

    // render() {
    //   if (!condition(this.props.authUser)) {
    //     return (
    //       <div>
    //         <Link to="/login">Login to the site</Link>
    //       </div>
    //     )
    //   }
    //   return (
    //     <Component {...this.props} />
    //   )
    // }
    render() {
      return condition(this.props.authUser) ? <Component {...this.props} /> : null
    }
  }

  return withRouter(withFirebase(withAuthUser(WithAuthorization)))
}

export default withAuthorization
