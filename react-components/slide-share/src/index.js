'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./css/index');

var _data = require('./data');

var SlideShare = (function (_Component) {
   _inherits(SlideShare, _Component);

   function SlideShare(props) {
      _classCallCheck(this, SlideShare);

      _get(Object.getPrototypeOf(SlideShare.prototype), 'constructor', this).call(this, props);
      this.state = {
         isOpen: false
      };
   }

   _createClass(SlideShare, [{
      key: 'handleMouseOver',
      value: function handleMouseOver() {
         this.setState({
            isOpen: true
         });
      }
   }, {
      key: 'handleMouseOut',
      value: function handleMouseOut() {
         this.setState({
            isOpen: false
         });
      }
   }, {
      key: 'getClass',
      value: function getClass() {
         return this.state.isOpen ? "share-content active" : "share-content ";
      }
   }, {
      key: 'render',
      value: function render() {
         var addressInfo = _data.shareAddress.map(function (item, index) {
            return _react2['default'].createElement(
               'li',
               { key: index },
               _react2['default'].createElement(
                  'a',
                  { href: item.href },
                  item.title
               )
            );
         });
         return _react2['default'].createElement(
            'div',
            { className: 'share' },
            _react2['default'].createElement(
               'div',
               { className: this.getClass(), onMouseOver: this.handleMouseOver.bind(this),
                  onMouseOut: this.handleMouseOut.bind(this) },
               _react2['default'].createElement(
                  'ul',
                  null,
                  addressInfo
               ),
               _react2['default'].createElement(
                  'span',
                  { className: 'btn' },
                  '分',
                  _react2['default'].createElement('br', null),
                  '享',
                  _react2['default'].createElement('br', null),
                  '到'
               )
            )
         );
      }
   }]);

   return SlideShare;
})(_react.Component);

_reactDom2['default'].render(_react2['default'].createElement(SlideShare, null), document.getElementById('slide'));