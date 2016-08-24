import _extends from 'babel-runtime/helpers/extends';

var _actions;

import { browserHistory, createMemoryHistory, Router, Route, Link, Redirect, IndexRoute, IndexLink, IndexRedirect, match, RouterContext, withRouter } from 'react-router';
import { routeActions, syncHistory, routeReducer } from 'react-router-redux';

import Auth from './lib/Auth';
import ScrollRouter from './lib/ScrollRouter';

var moduleName = 'router';

var builtinsRouter = {
  Router: Router,
  Route: Route,
  Link: Link,
  Redirect: Redirect,
  IndexRoute: IndexRoute,
  IndexLink: IndexLink,
  IndexRedirect: IndexRedirect,
  match: match,
  RouterContext: RouterContext,
  withRouter: withRouter
};

var builtinsCustom = {
  ScrollRouter: ScrollRouter,
  Auth: Auth
};

var builtinsHistory = {
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

export default _extends({}, builtinsRouter, builtinsCustom, builtinsHistory, {
  actions: (_actions = {}, _actions[moduleName] = routeActions, _actions),
  createPlugin: createPlugin
});