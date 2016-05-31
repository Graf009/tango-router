'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reducers, _actions;

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _Auth = require('./lib/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleName = 'router';

var builtins = {
  Router: _reactRouter.Router,
  Route: _reactRouter.Route,
  Link: _reactRouter.Link,
  Redirect: _reactRouter.Redirect,
  IndexRoute: _reactRouter.IndexRoute,
  IndexLink: _reactRouter.IndexLink,
  IndexRedirect: _reactRouter.IndexRedirect,
  Auth: _Auth2.default
};

var middleware = (0, _reactRouterRedux.syncHistory)(_reactRouter.browserHistory);
var getRouterState = function getRouterState(state) {
  return state.get(moduleName).location;
};

exports.default = (0, _extends3.default)({}, builtins, {
  history: _reactRouter.browserHistory,
  reducers: (_reducers = {}, _reducers[moduleName] = _reactRouterRedux.routeReducer, _reducers),
  actions: (_actions = {}, _actions[moduleName] = _reactRouterRedux.routeActions, _actions),
  middleware: middleware,
  hook: function hook(store) {
    middleware.listenForReplays(store, getRouterState);
    return store;
  }
});
module.exports = exports['default'];