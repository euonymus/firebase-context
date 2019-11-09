import React, { Component } from 'react'
// Firebase
import Firebase, { FirebaseContext } from '../../../src'

// TODO: search how to set envs
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class ProviderComposer extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase(config)}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}
export default ProviderComposer
