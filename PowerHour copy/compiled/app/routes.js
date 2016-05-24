'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

//React Router bootstraps the routes from routes.js file, matches them against a URL,
//and then executes the appropriate callback handler, which in this case means
//rendering a React component into <div id="app"></div>
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBR0U7QUFBQTtFQUFBLEVBQU8sd0JBQVA7RUFDRSxvREFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCO0FBREYsQyIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgPFJvdXRlIGNvbXBvbmVudD17QXBwfT5cbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtIb21lfSAvPlxuICA8L1JvdXRlPlxuKTtcblxuXG4vL1JlYWN0IFJvdXRlciBib290c3RyYXBzIHRoZSByb3V0ZXMgZnJvbSByb3V0ZXMuanMgZmlsZSwgbWF0Y2hlcyB0aGVtIGFnYWluc3QgYSBVUkwsIFxuLy9hbmQgdGhlbiBleGVjdXRlcyB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2sgaGFuZGxlciwgd2hpY2ggaW4gdGhpcyBjYXNlIG1lYW5zIFxuLy9yZW5kZXJpbmcgYSBSZWFjdCBjb21wb25lbnQgaW50byA8ZGl2IGlkPVwiYXBwXCI+PC9kaXY+Il19