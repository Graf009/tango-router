import React from 'react'
import { Component, PropTypes, connect } from '@eagle/tango'
import { Iterable } from 'immutable'

const defaults = {
  failureRedirectPath: '/login',
  predicate: authData => Iterable.isIterable(authData) && !authData.isEmpty(),
  allowRedirectBack: true,
}

export default (options) => {
  const {
    authSelector,
    failureRedirectPath,
    predicate,
    allowRedirectBack,
    redirectAction,
  } = {
    ...defaults,
    ...options,
  }
    
  if (!redirectAction) {
    throw new Error('Missed `redirectAction` property in options')
  }

  const isAuthorized = authData => predicate(authData)

  const ensureAuth = ({ location, authData }, replace) => {
    let query
    if (allowRedirectBack) {
      query = { redirect: `${location.pathname}${location.search}` }
    } else {
      query = {}
    }

    if (!isAuthorized(authData)) {
      const redirect = redirectAction || replace
      redirect({
        pathname: failureRedirectPath,
        query,
      })
    }
  }

  class AuthComponent extends Component {
    static propTypes = {
      // eslint-disable-next-line react/forbid-prop-types, react/no-unused-prop-types
      location: PropTypes.object.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      authData: PropTypes.object,
      children: PropTypes.node,
    }

    componentWillMount() {
      ensureAuth(this.props)
    }

    componentWillReceiveProps(nextProps) {
      ensureAuth(nextProps)
    }

    render() {
      const { children, authData } = this.props

      if (isAuthorized(authData)) {
        return React.Children.only(children)
      }
      // Don't need to display anything because the user will be redirected
      return null
    }
  }

  const onEnter = store => (nextState, replace) => {
    const authData = authSelector(store.getState())
    ensureAuth({ location: nextState.location, authData }, replace)
  }

  return {
    component: connect({ authData: authSelector })(AuthComponent),
    onEnter,
  }
}
