# Firebase Context

This provides react context for firebase

## Requirements

* firebase


## How to publish

* Transpile the file

```
$ npm run transpile
```

* Publish

```
$ npm publish
```

## How to use

[Provider]
in your component

```
...
import Firebase, { FirebaseContext } from 'firebase-context'
...

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class YourComponent extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase(config)}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}
```

[Using firebase]
in your component

```
...
import { withFirebase } from 'firebase-context'
...

class YourComponent2 extends Component {

  yourFunction = () => {
    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        // to something
      })
      .catch(error => {
        // to something
      })
  }

  render() {
    <div>something</div>
  }
}

export default withFirebase(YourComponent2)

```