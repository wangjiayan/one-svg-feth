"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["color", "size"];

var Menu = function Menu(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 24 : _props$size,
      rst = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: size,
    height: size
  }, rst, {
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.385 6.857a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 010 1.8H4.285a.9.9 0 01-.9-.9z"
  }));
};

var _default = Menu;
exports["default"] = _default;