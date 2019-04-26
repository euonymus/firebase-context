"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

var Firebase = function Firebase(config) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Firebase);

  _app["default"].initializeApp(config);
  /* Helper */


  this.serverValue = _app["default"].firestore.ServerValue;
  /* Firebase APIs */

  this.auth = _app["default"].auth();
  this.db = _app["default"].firestore();
  /* Social Sign In Method Provider */

  this.googleProvider = new _app["default"].auth.GoogleAuthProvider();
  this.facebookProvider = new _app["default"].auth.FacebookAuthProvider();
  this.twitterProvider = new _app["default"].auth.TwitterAuthProvider(); // *** Auth API ***

  this.doSignInAnonymously = function () {
    return _this.auth.signInAnonymously();
  };

  this.doCreateUserWithEmailAndPassword = function (email, password) {
    return _this.auth.createUserWithEmailAndPassword(email, password);
  };

  this.doSignInWithEmailAndPassword = function (email, password) {
    return _this.auth.signInWithEmailAndPassword(email, password);
  };

  this.doSignInWithGoogle = function () {
    return _this.auth.signInWithPopup(_this.googleProvider);
  };

  this.doSignInWithFacebook = function () {
    return _this.auth.signInWithPopup(_this.facebookProvider);
  };

  this.doSignInWithTwitter = function () {
    return _this.auth.signInWithPopup(_this.twitterProvider);
  };

  this.doSignOut = function () {
    return _this.auth.signOut();
  };

  this.doPasswordReset = function (email) {
    return _this.auth.sendPasswordResetEmail(email);
  };

  this.doSendEmailVerification = function (url) {
    console.log('in email');
    var params = {};

    if (url) {
      console.log('in url if');
      params = {
        url: url
      };
    }

    _this.auth.currentUser.sendEmailVerification(params);
  };

  this.doPasswordUpdate = function (password) {
    return _this.auth.currentUser.updatePassword(password);
  };

  this.doGetIdToken = function () {
    return _this.auth.currentUser.getIdToken(
    /* forceRefresh */
    true);
  }; // *** Do something when auth state changed *** //
  // func:     main function that does what you want to do
  // next:     a function you want to apply after func succeeded
  // fallback: a function you want to apply after func failed


  this.onAuthStateChanged = function (func, next, fallback) {
    return _this.auth.onAuthStateChanged(
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(authUser) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return func(authUser);

              case 2:
                authUser = _context.sent;

                if (authUser) {
                  next(authUser);
                } else {
                  fallback();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
};

var _default = Firebase;
exports["default"] = _default;