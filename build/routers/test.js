"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var testrouter = (0, _express.Router)();
testrouter.get('/', function (req, res) {
  res.status(200).json({
    message: 'working..'
  });
});
var _default = testrouter;
exports.default = _default;