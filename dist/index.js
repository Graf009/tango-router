'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _Auth = require('./lib/Auth');

var _Auth2 = _interopRequireDefault(_Auth);

var _ScrollRouter = require('./lib/ScrollRouter');

var _ScrollRouter2 = _interopRequireDefault(_ScrollRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleName = 'router';

var builtinsRouter = {
  Router: _reactRouter.Router,
  Route: _reactRouter.Route,
  Link: _reactRouter.Link,
  Redirect: _reactRouter.Redirect,
  IndexRoute: _reactRouter.IndexRoute,
  IndexLink: _reactRouter.IndexLink,
  IndexRedirect: _reactRouter.IndexRedirect,
  match: _reactRouter.match,
  RouterContext: _reactRouter.RouterContext,
  withRouter: _reactRouter.withRouter
};

var builtinsCustom = {
  ScrollRouter: _ScrollRouter2.default,
  Auth: _Auth2.default
};

var builtinsHistory = {
  browserHistory: _reactRouter.browserHistory,
  createMemoryHistory: _reactRouter.createMemoryHistory
};

var getRouterState = function getRouterState(state) {
  return state.get(moduleName).location;
};
var createPlugin = function createPlugin(history) {
  var _reducers;

  var middleware = (0, _reactRouterRedux.syncHistory)(history);

  return {
    reducers: (_reducers = {}, _reducers[moduleName] = _reactRouterRedux.routeReducer, _reducers),
    middleware: middleware,
    hook: function hook(store) {
      middleware.listenForReplays(store, getRouterState);
      return store;
    }
  };
};

exports.default = (0, _extends3.default)({}, builtinsRouter, builtinsCustom, builtinsHistory, {
  actions: (_actions = {}, _actions[moduleName] = _reactRouterRedux.routeActions, _actions),
  createPlugin: createPlugin
});
module.exports = exports['default'];