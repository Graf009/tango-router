import _extends from 'babel-runtime/helpers/extends';

var _reducers, _actions;

import { routeActions, syncHistory, routeReducer } from 'react-router-redux';
import { browserHistory, Router, Route, Link, Redirect, IndexRoute, IndexLink, IndexRedirect } from 'react-router';

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
  Auth: Auth
};

var middleware = syncHistory(browserHistory);
var getRouterState = function getRouterState(state) {
  return state.get(moduleName).location;
};

export default _extends({}, builtins, {
  history: browserHistory,
  reducers: (_reducers = {}, _reducers[moduleName] = routeReducer, _reducers),
  actions: (_actions = {}, _actions[moduleName] = routeActions, _actions),
  middleware: middleware,
  hook: function hook(store) {
    middleware.listenForReplays(store, getRouterState);
    return store;
  }
});