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

var Trash = function Trash(props) {
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
    d: "M10.283 4.4a.826.826 0 00-.581.237.791.791 0 00-.236.563V6h5.068v-.8a.791.791 0 00-.236-.563.826.826 0 00-.58-.237h-3.435zM16.334 6v-.8c0-.692-.278-1.355-.77-1.842a2.626 2.626 0 00-1.847-.758h-3.434c-.691 0-1.356.272-1.848.758a2.591 2.591 0 00-.77 1.842V6H4.274a.9.9 0 100 1.8h.817v11c0 .692.278 1.355.77 1.842a2.626 2.626 0 001.847.758h8.586c.691 0 1.356-.272 1.847-.758.492-.487.77-1.15.77-1.842v-11h.817a.9.9 0 000-1.8h-3.393zM6.89 7.8v11c0 .21.084.412.236.563a.826.826 0 00.581.237h8.586c.22 0 .428-.087.581-.238a.792.792 0 00.236-.562v-11H6.89zm3.393 2.45a.9.9 0 01.9.9v5.1a.9.9 0 11-1.8 0v-5.1a.9.9 0 01.9-.9zm3.434 0a.9.9 0 01.9.9v5.1a.9.9 0 01-1.8 0v-5.1a.9.9 0 01.9-.9z"
  }));
};

var _default = Trash;
exports["default"] = _default;