# tango-router

> Dead simple router for tango

Wraps react-router + react-router-redux and provides the simplest API possible. Built for tango, but will work in any redux application.

## Install

```
npm install tango-router --save
```

## Get Started

- Import in the module
- Add it to your store's plugins
- Router state is now under `router` in your store

### ES6 Example

```js
import { createStore } from 'tango'
import * as router from 'tango-router'

// you get the point
let store = createStore({
  plugins: [ router ]
})
```

## API

- history
- actions
- reducers
- middleware
- hook

### Components

These are all re-exported from react-router, the behavior is exactly the same. See the [react-router documentation](https://github.com/reactjs/react-router/tree/master/docs) if you haven't used these before.

- Router
- Route
- Link
- Redirect
- IndexRoute
- IndexLink
- IndexRedirect
