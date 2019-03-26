"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

_chai.default.use(_chaiHttp.default);

describe('Testing travis ci', function () {
  it('should return 200 on successful',
  /*#__PURE__*/
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _chai.default.request(_index.default).get('/api/v1/');

          case 2:
            res = _context.sent;
            (0, _chai.expect)(res).to.have.status(200);
            (0, _chai.expect)(res).to.be.a('object');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});