"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FirebaseContext", {
  enumerable: true,
  get: function get() {
    return _context["default"];
  }
});
Object.defineProperty(exports, "withFirebase", {
  enumerable: true,
  get: function get() {
    return _context.withFirebase;
  }
});
exports["default"] = void 0;

var _context = _interopRequireWildcard(require("./context"));

var _firebase = _interopRequireDefault(require("./firebase"));

var _default = _firebase["default"];
exports["default"] = _default;