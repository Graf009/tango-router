'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _reactRouter = require('react-router');

var _reactRouterScroll = require('react-router-scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollRouter = (_temp = _class = function (_Router) {
  (0, _inherits3.default)(ScrollRouter, _Router);

  function ScrollRouter() {
    (0, _classCallCheck3.default)(this, ScrollRouter);
    return (0, _possibleConstructorReturn3.default)(this, _Router.apply(this, arguments));
  }

  return ScrollRouter;
}(_reactRouter.Router), _class.defaultProps = {
  render: (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll.useScroll)())
}, _temp);
exports.default = ScrollRouter;
module.exports = exports['default'];