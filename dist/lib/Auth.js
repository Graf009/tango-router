'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _RouteUtils = require('react-router/lib/RouteUtils');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _tango = require('@eagle/tango');

var _createAuthComponent2 = require('./createAuthComponent');

var _createAuthComponent3 = _interopRequireDefault(_createAuthComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Auth, _Component);

  function Auth() {
    (0, _classCallCheck3.default)(this, Auth);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Auth.createRouteFromReactElement = function createRouteFromReactElement(element) {
    var route = (0, _RouteUtils.createRouteFromReactElement)(element);
    var options = route.options;
    var store = route.store;

    var _createAuthComponent = (0, _createAuthComponent3.default)(options);

    var component = _createAuthComponent.component;
    var onEnter = _createAuthComponent.onEnter;


    return (0, _extends3.default)({}, route, {
      component: component,
      onEnter: onEnter(store)
    });
  };

  Auth.prototype.render = function render() {
    (0, _invariant2.default)(false, '<Auth> elements are for router configuration only and should not be rendered');
    return null;
  };

  return Auth;
}(_tango.Component), _class.propTypes = {
  options: _tango.PropTypes.object.isRequired,
  store: _tango.PropTypes.object.isRequired
}, _temp);
exports.default = Auth;
module.exports = exports['default'];