"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routers = _interopRequireDefault(require("./routers"));

var app = (0, _express.default)();
var port = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/api/v1', _routers.default);
app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log("Dev app listening on port ".concat(port, "!"));
});
var _default = app;
exports.default = _default;