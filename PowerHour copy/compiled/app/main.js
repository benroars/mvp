'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)(); //makes it so /asdf instead of /#/asdf

// URL listener and render the application when it changes
_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

//React Router bootstraps the routes from routes.js file, matches them against a URL,
//and then executes the appropriate callback handler, which in this case means
//rendering a React component into <div id="app"></div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxVQUFVLHFDQUFkLEM7OztBQUdBLG1CQUFTLE1BQVQsQ0FBZ0I7QUFBQTtFQUFBLEVBQVEsU0FBUyxPQUFqQjtFQUFBO0FBQUEsQ0FBaEIsRUFBNkQsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBQTdEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlQnJvd3Nlckhpc3RvcnkgZnJvbSAnaGlzdG9yeS9saWIvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTsgLy9tYWtlcyBpdCBzbyAvYXNkZiBpbnN0ZWFkIG9mIC8jL2FzZGZcblxuLy8gVVJMIGxpc3RlbmVyIGFuZCByZW5kZXIgdGhlIGFwcGxpY2F0aW9uIHdoZW4gaXQgY2hhbmdlc1xuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy9SZWFjdCBSb3V0ZXIgYm9vdHN0cmFwcyB0aGUgcm91dGVzIGZyb20gcm91dGVzLmpzIGZpbGUsIG1hdGNoZXMgdGhlbSBhZ2FpbnN0IGEgVVJMLCBcbi8vYW5kIHRoZW4gZXhlY3V0ZXMgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrIGhhbmRsZXIsIHdoaWNoIGluIHRoaXMgY2FzZSBtZWFucyBcbi8vcmVuZGVyaW5nIGEgUmVhY3QgY29tcG9uZW50IGludG8gPGRpdiBpZD1cImFwcFwiPjwvZGl2PiJdfQ==