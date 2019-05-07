import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

class Firebase {

  constructor(config) {
    app.initializeApp(config)
    
    /* Helper */
    this.serverValue = app.firestore.ServerValue
    
    /* Firebase APIs */
    this.auth = app.auth()
    this.db = app.firestore()
    
    /* Social Sign In Method Provider */
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.twitterProvider = new app.auth.TwitterAuthProvider()

    // *** Auth API ***
    this.doSignInAnonymously = () => this.auth.signInAnonymously()

    this.doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

    this.doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
      
    this.doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)
      
    this.doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)
      
    this.doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider)
      
    this.doSignOut = () => this.auth.signOut()

    this.doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    this.doSendEmailVerification = (url) => {
      let params = {}
      if (url) {
        params = { url }
      }
      this.auth.currentUser.sendEmailVerification(params)
    }

    this.doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)
      
    this.doGetIdToken = () => this.auth.currentUser.getIdToken(/* forceRefresh */ true)
      
    // *** Do something when auth state changed *** //
    // func:     main function that does what you want to do
    // next:     a function you want to apply after func succeeded
    // fallback: a function you want to apply after func failed
    this.onAuthStateChanged = (func, next, fallback) => {
      return this.auth.onAuthStateChanged(async authUser => {
        authUser = await func(authUser)
        if (authUser) {
          next(authUser)
        } else {
          fallback()
        }
      })
    }

  }
}

export default Firebase

