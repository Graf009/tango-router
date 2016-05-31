import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import { createRouteFromReactElement as _createRouteFromReactElement } from 'react-router/lib/RouteUtils';
import invariant from 'invariant';
import { Component, PropTypes } from '@eagle/tango';

import createAuthComponent from './createAuthComponent';

var Auth = (_temp = _class = function (_Component) {
  _inherits(Auth, _Component);

  function Auth() {
    _classCallCheck(this, Auth);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Auth.createRouteFromReactElement = function createRouteFromReactElement(element) {
    var route = _createRouteFromReactElement(element);
    var options = route.options;
    var store = route.store;

    var _createAuthComponent = createAuthComponent(options);

    var component = _createAuthComponent.component;
    var onEnter = _createAuthComponent.onEnter;


    return _extends({}, route, {
      component: component,
      onEnter: onEnter(store)
    });
  };

  Auth.prototype.render = function render() {
    invariant(false, '<Auth> elements are for router configuration only and should not be rendered');
    return null;
  };

  return Auth;
}(Component), _class.propTypes = {
  options: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}, _temp);
export { Auth as default };