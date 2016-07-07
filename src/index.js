import { routeActions, syncHistory, routeReducer } from 'react-router-redux'
import {
  browserHistory,
  createMemoryHistory,
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect,
} from 'react-router'

import Auth from './lib/Auth'

const moduleName = 'router'

const builtins = {
  Router,
  Route,
  Link,
  Redirect,
  IndexRoute,
  IndexLink,
  IndexRedirect,
  Auth,
}

const history = {
  browserHistory,
  createMemoryHistory,
}

const getRouterState = (state) => state.get(moduleName).location
const createPlugin = (history) => {
  const middleware = syncHistory(history)

  return {
    reducers: {
      [moduleName]: routeReducer,
    },
    middleware,
    hook: (store) => {
      middleware.listenForReplays(store, getRouterState)
      return store
    },
  }
}

export default {
  ...builtins,
  ...history,
  actions: {
    [moduleName]: routeActions,
  },
  createPlugin,
}
