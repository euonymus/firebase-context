"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.withFirebase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var FirebaseContext = _react["default"].createContext(null);

var withFirebase = function withFirebase(Component) {
  return function (props) {
    return _react["default"].createElement(FirebaseContext.Consumer, null, function (firebase) {
      return _react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
        firebase: firebase
      }));
    });
  };
};

exports.withFirebase = withFirebase;
var _default = FirebaseContext;
exports["default"] = _default;