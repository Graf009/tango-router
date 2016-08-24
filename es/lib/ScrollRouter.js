import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import { Router, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

var ScrollRouter = (_temp = _class = function (_Router) {
  _inherits(ScrollRouter, _Router);

  function ScrollRouter() {
    _classCallCheck(this, ScrollRouter);

    return _possibleConstructorReturn(this, _Router.apply(this, arguments));
  }

  return ScrollRouter;
}(Router), _class.defaultProps = {
  render: applyRouterMiddleware(useScroll())
}, _temp);
export { ScrollRouter as default };