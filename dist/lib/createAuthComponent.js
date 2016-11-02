'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _tango=require('@eagle/tango');var _immutable=require('immutable');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaults={failureRedirectPath:'/login',predicate:function predicate(authData){return _immutable.Iterable.isIterable(authData)&&!authData.isEmpty();},allowRedirectBack:true};exports.default=function(options){var _defaults$options=_extends({},defaults,options),authSelector=_defaults$options.authSelector,failureRedirectPath=_defaults$options.failureRedirectPath,predicate=_defaults$options.predicate,allowRedirectBack=_defaults$options.allowRedirectBack,redirectAction=_defaults$options.redirectAction;var isAuthorized=function isAuthorized(authData){return predicate(authData);};var ensureAuth=function ensureAuth(_ref,redirect){var location=_ref.location,authData=_ref.authData;var query=void 0;if(allowRedirectBack){query={redirect:''+location.pathname+location.search};}else{query={};}if(!isAuthorized(authData)){redirect({pathname:failureRedirectPath,query:query});}};var AuthComponent=function(_Component){_inherits(AuthComponent,_Component);function AuthComponent(){_classCallCheck(this,AuthComponent);return _possibleConstructorReturn(this,_Component.apply(this,arguments));}AuthComponent.prototype.componentWillMount=function componentWillMount(){ensureAuth(this.props,redirectAction);};AuthComponent.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){ensureAuth(nextProps,redirectAction);};AuthComponent.prototype.render=function render(){var _props=this.props,children=_props.children,authData=_props.authData;if(isAuthorized(authData)){return _react2.default.Children.only(children);}return null;};return AuthComponent;}(_tango.Component);AuthComponent.propTypes={location:_tango.PropTypes.object.isRequired,authData:_tango.PropTypes.object,children:_tango.PropTypes.node};var onEnter=function onEnter(store){return function(nextState,replace){var authData=authSelector(store.getState());ensureAuth({location:nextState.location,authData:authData},replace);};};return{component:(0,_tango.connect)({authData:authSelector})(AuthComponent),onEnter:onEnter};};module.exports=exports['default'];