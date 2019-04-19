// react
import React from 'react'
// redux
import { withAuthentication } from './providers/session'
// container
import AppRoutes from './routes'
// import InitApp from './containers/init-app'

class Initializer extends React.Component {
  render() {
    return (
      <AppRoutes />
    )
  }
}

export default withAuthentication(Initializer)
