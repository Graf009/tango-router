# @eagle/tango-router

> Dead simple router for @eagle/tango

Wraps react-router + react-router-redux and provides the simplest API possible. Built for @eagle/tango, but will work in any redux application.

## Install

```
npm install --save @eagle/tango-router
```

## Repository

https://github.com/Graf009/tango-router.git

## Get Started

- Import in the module
- Add it to your store's plugins
- Router state is now under `router` in your store

### Example

```js
import { createStore } from '@eagle/tango'
import * as router from '@eagle/tango-router'

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

#### Auth

   handling authentication
   
##### Props

- `store` - Redux store
- `options` - Options Object

##### Options Object Keys

- `authSelector(state): authData` \(*Function*): A state selector for the auth data.
- `redirectAction` \(*Function*): action for redirecting the user.
- `[failureRedirectPath]` \(*String*): Optional path to redirect the browser to on a failed check. Defaults to `/login`
- `[predicate(authData): Bool]` \(*Function*): Optional function to be passed the result of the `authSelector` param.
If it evaluates to false the browser will be redirected to `failureRedirectPath`.
- `[allowRedirectBack]` \(*Bool*): Optional bool on whether to pass a `redirect` query parameter to the `failureRedirectPath`
