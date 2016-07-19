import _extends from 'babel-runtime/helpers/extends';

var _actions;

import { routeActions, syncHistory, routeReducer } from 'react-router-redux';
import { browserHistory, createMemoryHistory, Router, Route, Link, Redirect, IndexRoute, IndexLink, IndexRedirect, match, RouterContext, withRouter } from 'react-router';

import Auth from './lib/Auth';

var moduleName = 'router';

var builtins = {
  Router: Router,
  Route: Route,
  Link: Link,
  Redirect: Redirect,
  IndexRoute: IndexRoute,
  IndexLink: IndexLink,
  IndexRedirect: IndexRedirect,
  match: match,
  RouterContext: RouterContext,
  Auth: Auth,
  withRouter: withRouter
};

var history = {
  browserHistory: browserHistory,
  createMemoryHistory: createMemoryHistory
};

var getRouterState = function getRouterState(state) {
  return state.get(moduleName).location;
};
var createPlugin = function createPlugin(history) {
  var _reducers;

  var middleware = syncHistory(history);

  return {
    reducers: (_reducers = {}, _reducers[moduleName] = routeReducer, _reducers),
    middleware: middleware,
    hook: function hook(store) {
      middleware.listenForReplays(store, getRouterState);
      return store;
    }
  };
};

export default _extends({}, builtins, history, {
  actions: (_actions = {}, _actions[moduleName] = routeActions, _actions),
  createPlugin: createPlugin
});