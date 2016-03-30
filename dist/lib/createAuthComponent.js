'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tango = require('@tvevt/tango');

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  failureRedirectPath: '/login',
  predicate: function predicate(authData) {
    return _immutable.Iterable.isIterable(authData) && !authData.isEmpty();
  },
  allowRedirectBack: true
};

exports.default = function (options) {
  var _dec, _class, _class2, _temp;

  var _defaults$options = (0, _extends3.default)({}, defaults, options);

  var authSelector = _defaults$options.authSelector;
  var failureRedirectPath = _defaults$options.failureRedirectPath;
  var predicate = _defaults$options.predicate;
  var allowRedirectBack = _defaults$options.allowRedirectBack;
  var redirectAction = _defaults$options.redirectAction;


  var isAuthorized = function isAuthorized(authData) {
    return predicate(authData);
  };

  var ensureAuth = function ensureAuth(_ref, redirect) {
    var location = _ref.location;
    var authData = _ref.authData;

    var query = void 0;
    if (allowRedirectBack) {
      query = { redirect: '' + location.pathname + location.search };
    } else {
      query = {};
    }

    if (!isAuthorized(authData)) {
      redirect({
        pathname: failureRedirectPath,
        query: query
      });
    }
  };

  var AuthComponent = (_dec = (0, _tango.connect)({ authData: authSelector }), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(AuthComponent, _Component);

    function AuthComponent() {
      (0, _classCallCheck3.default)(this, AuthComponent);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AuthComponent).apply(this, arguments));
    }

    (0, _createClass3.default)(AuthComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        ensureAuth(this.props, redirectAction);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        ensureAuth(nextProps, redirectAction);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var children = _props.children;
        var authData = _props.authData;


        if (isAuthorized(authData)) {
          return _react2.default.Children.only(children);
        }
        // Don't need to display anything because the user will be redirected
        return null;
      }
    }]);
    return AuthComponent;
  }(_tango.Component), _class2.propTypes = {
    location: _tango.PropTypes.shape({
      pathname: _tango.PropTypes.string.isRequired,
      search: _tango.PropTypes.string.isRequired
    }).isRequired,
    authData: _tango.PropTypes.object,
    children: _tango.PropTypes.node
  }, _temp)) || _class);


  var onEnter = function onEnter(store) {
    return function (nextState, replace) {
      var authData = authSelector(store.getState());
      ensureAuth({ location: nextState.location, authData: authData }, replace);
    };
  };

  return {
    component: AuthComponent,
    onEnter: onEnter
  };
};

module.exports = exports['default'];