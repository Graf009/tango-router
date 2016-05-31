import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Component, PropTypes, connect } from '@eagle/tango';
import { Iterable } from 'immutable';

var defaults = {
  failureRedirectPath: '/login',
  predicate: function predicate(authData) {
    return Iterable.isIterable(authData) && !authData.isEmpty();
  },
  allowRedirectBack: true
};

export default (function (options) {
  var _dec, _class, _class2, _temp;

  var _defaults$options = _extends({}, defaults, options);

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

  var AuthComponent = (_dec = connect({ authData: authSelector }), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(AuthComponent, _Component);

    function AuthComponent() {
      _classCallCheck(this, AuthComponent);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    AuthComponent.prototype.componentWillMount = function componentWillMount() {
      ensureAuth(this.props, redirectAction);
    };

    AuthComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      ensureAuth(nextProps, redirectAction);
    };

    AuthComponent.prototype.render = function render() {
      var _props = this.props;
      var children = _props.children;
      var authData = _props.authData;


      if (isAuthorized(authData)) {
        return React.Children.only(children);
      }
      // Don't need to display anything because the user will be redirected
      return null;
    };

    return AuthComponent;
  }(Component), _class2.propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired
    }).isRequired,
    authData: PropTypes.object,
    children: PropTypes.node
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
})