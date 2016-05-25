(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBroActions = function () {
  function AddBroActions() {
    _classCallCheck(this, AddBroActions);

    this.generateActions('addBroSuccess', 'addBroFail', 'updateName', 'updateGender', 'updateDrink');
  }

  _createClass(AddBroActions, [{
    key: 'addBro',
    value: function addBro(name, gender, drink) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/characters',
        data: { name: name, gender: gender, drink: drink }
      }).done(function (data) {
        _this.actions.addBroSuccess(data.message);
      }).fail(function (data) {
        _this.actions.addBroFail('User already in database');
      });
    }
  }]);

  return AddBroActions;
}();

exports.default = _alt2.default.createActions(AddBroActions);

},{"../alt":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddChallengeActions = function () {
  function AddChallengeActions() {
    _classCallCheck(this, AddChallengeActions);

    this.generateActions('addChallengeSuccess', 'addChallengeFail', 'updateName', 'updateDescription', 'updateImage', 'updateShots', 'updateTime', 'updateTypeAlcohol');
  }

  _createClass(AddChallengeActions, [{
    key: 'addChallenge',
    value: function addChallenge(name, image, shots, time, typeAlcohol, description) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/challenges',
        data: { name: name, image: image, shots: shots, time: time, typeAlcohol: typeAlcohol, description: description }
      }).done(function (data) {
        _this.actions.addChallengeSuccess(data.message);
      }).fail(function (data) {
        _this.actions.addChallengeFail('Challenge already in database');
      });
    }
  }]);

  return AddChallengeActions;
}();

exports.default = _alt2.default.createActions(AddChallengeActions);

},{"../alt":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChallengeActions = function () {
  function ChallengeActions() {
    _classCallCheck(this, ChallengeActions);

    this.generateActions('getChallengeSuccess', 'getChallengeFail');
  }

  _createClass(ChallengeActions, [{
    key: 'getChallenge',
    value: function getChallenge(challengeName) {
      var _this = this;

      console.log('THE CHALLENGE ID', challengeName);

      $.ajax({ url: '/api/challenges/' + challengeName }).done(function (data) {
        _this.actions.getChallengeSuccess(data);
      }).fail(function () {
        _this.actions.getChallengeFail("Failed to get challenge");
      });
    }
  }]);

  return ChallengeActions;
}();

exports.default = _alt2.default.createActions(ChallengeActions);

},{"../alt":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions('getChallengesSuccess', 'getChallengesFail');
  }

  _createClass(HomeActions, [{
    key: 'getChallenges',
    value: function getChallenges() {
      var _this = this;

      $.ajax({ url: '/api/challenges' }).done(function (data) {
        _this.actions.getChallengesSuccess(data);
      }).fail(function (data) {
        _this.actions.getChallengesFail('Failed to load challenges D:');
      });
    }
  }]);

  return HomeActions;
}();

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions();
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":6,"underscore":"underscore"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddBroStore = require('../stores/AddBroStore');

var _AddBroStore2 = _interopRequireDefault(_AddBroStore);

var _AddBroActions = require('../actions/AddBroActions');

var _AddBroActions2 = _interopRequireDefault(_AddBroActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBro = function (_React$Component) {
  _inherits(AddBro, _React$Component);

  function AddBro(props) {
    _classCallCheck(this, AddBro);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBro).call(this, props));

    _this.state = _AddBroStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddBro, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddBroStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddBroStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var gender = this.state.gender;
      var drink = this.state.drink;

      if (name && gender && drink) {
        _AddBroActions2.default.addBro(name, gender, drink);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                'Add Bro'
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    'Bro\'s Name'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                    onChange: _AddBroActions2.default.updateName.bind(this), autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'span',
                    { className: 'help-block' },
                    this.state.helpBlock
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'female', value: 'Female', checked: this.state.gender === 'Female',
                      onChange: _AddBroActions2.default.updateGender }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'female' },
                      'Male'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'radio radio-inline' },
                    _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'male', value: 'Male', checked: this.state.gender === 'Male',
                      onChange: _AddBroActions2.default.updateGender }),
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'male' },
                      'Female'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    'Drink of Choice:'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'drinkTextField', value: this.state.drink,
                    onChange: _AddBroActions2.default.updateDrink.bind(this), autoFocus: true }),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddBro;
}(_react2.default.Component);

exports.default = AddBro;

},{"../actions/AddBroActions":1,"../stores/AddBroStore":15,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Because route component set to app, can use this.props.children to route based on the url

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Navbar":11,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChallengeStore = require('../stores/ChallengeStore');

var _ChallengeStore2 = _interopRequireDefault(_ChallengeStore);

var _ChallengeActions = require('../actions/ChallengeActions');

var _ChallengeActions2 = _interopRequireDefault(_ChallengeActions);

var _reactWebcam = require('react-webcam');

var _reactWebcam2 = _interopRequireDefault(_reactWebcam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var timerID;

var x = {
    'font-size': '35px'
};

var Challenge = function (_React$Component) {
    _inherits(Challenge, _React$Component);

    function Challenge(props) {
        _classCallCheck(this, Challenge);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Challenge).call(this, props));

        _this.state = _ChallengeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Challenge, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ChallengeStore2.default.listen(this.onChange);
            console.log('THE PARAMS', this.props.params);
            _ChallengeActions2.default.getChallenge(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ChallengeStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(type) {
            if (type === 1) {
                document.getElementById("CountDownPanel").style.visibility = "visible";
                doStart(Number(this.state.time) * 60);
            } else {

                timerID.cancel();
                alert('FAILURE');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'pull-left container thumbnail' },
                    _react2.default.createElement('img', { src: this.state.image })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactWebcam2.default, { className: 'cam pull-right', height: '400', width: '400' }),
                    ';',
                    _react2.default.createElement(
                        'h3',
                        null,
                        this.state.name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'spacer' },
                        '.'
                    ),
                    _react2.default.createElement(
                        'h3',
                        { style: x, className: 'test', id: 'test' },
                        '  • ' + this.state.shots,
                        ' Shots in ',
                        this.state.time,
                        ' minutes'
                    ),
                    _react2.default.createElement(
                        'h3',
                        { style: x, id: 'test' },
                        ' • ',
                        'Type Alcohol: ',
                        this.state.typeAlcohol
                    ),
                    _react2.default.createElement(
                        'h3',
                        { style: x, id: 'test' },
                        ' • ',
                        this.state.description
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-primary btn-lg', onClick: this.handleClick.bind(this, 1) },
                        'Start'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'addwid' },
                        '...'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-danger btn-lg', onClick: this.handleClick.bind(this, 2) },
                        'Failure'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'addwid' },
                        '...'
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-success btn-lg' },
                        'AddPlayers'
                    )
                ),
                _react2.default.createElement('div', { id: 'CountDownPanel', className: 'pull-left timer' }),
                _react2.default.createElement('audio', { src: 'moti.mp3', autoplay: true })
            );
        }
    }]);

    return Challenge;
}(_react2.default.Component);

exports.default = Challenge;

//////////////////////////////////////////
//JS FIDDLE FOUND TIMER IMPLEMENTATION
//////////////////////////////////////////

var WARNING_THRESHOLD = 4 * 60 * 1000000; //4 minutes (in milliseconds)
var _start = new Date().getTime();

function doStart(time) {
    var id = "CountDownPanel";
    var i = time; //duration in seconds
    ActivateCountDown(id, i);
}

function ActivateCountDown(strContainerID, initialValue) {
    var _countDownContainer = document.getElementById(strContainerID);
    var $_countDownContainer;

    if (!_countDownContainer) {
        alert("count down error: container does not exist: " + strContainerID + "\nmake sure html element with this ID exists");
    } else {
        $_countDownContainer = $(document.getElementById(strContainerID));
        //the ATimer below works with time values in milliseconds
        //the "20" will update display ever 20 milliseconds, as fast as screen refreshes
        $_countDownContainer.removeClass("warn");
        timerID = new ATimer(initialValue * 1000, 20, CountDownComplete, CountDownTick);
        timerID.start();
    }

    function CountDownComplete() {
        alert("Your time has expired!");
    }

    function CountDownTick(remaining) {
        if (remaining < WARNING_THRESHOLD) $_countDownContainer.addClass("warn");
        SetCountdownText(remaining);
    }

    function SetCountdownText(remaining) {
        _countDownContainer.innerHTML = remaining.millisecondsToHundredthsString();
    }
}

//(2) Helpers
Number.prototype.millisecondsToHundredthsString = function () {
    /// <summary>Convert number of milliseconds into text with format MM:SS:hh</summary>
    /// <param name="this">Number of milliseconds</param>
    /// <returns type="Text" >Duration, text in format MM:SS:hh</<returns>
    var partMultipliers = [{ d: 60000, p: 100 }, { d: 1000, p: 100 }, { d: 10, p: 100 }];
    var remainder = parseInt(this);
    return partMultipliers.reduce(function (prev, m, idx) {
        var quotient = Math.floor(remainder / m.d); //m.d is divisor
        remainder -= quotient * m.d;
        return prev + (idx == 0 ? "" : ":") + (quotient + m.p).toString().substr(1); //m.p is a framer
    }, "");
};

String.prototype.toMilliseconds = function () {
    /// <summary>Convert from string to number of milliseconds</summary>
    /// <param name="this">Duration, text in format MM:SS:mmm (mmm is milliseconds)</param>
    /// <returns type="Number">Number of milliseconds</returns>
    var partMultipliers = [1, 1000, 60000];
    var parts = this.split(":").reverse();
    return milliseconds = parts.reduce(function (prev, part, idx) {
        var res = parseInt(part) * partMultipliers[idx];
        return prev + res;
    }, 0);
};

//(3) Custom "ATimer" Class
function ATimer(milliseconds, optionalPeriod, optionalCallback, optionalUpdateCallback) {
    //ensure this runs as a new instance upon each instantiation
    if (typeof ATimer != "function") return new ATimer.call(this, arguments);

    //PRIVATE properties...
    var timerInstance,
        duration = milliseconds,
        period = 20,
        count = 0,
        chunks,
        completer,
        updater;
    var self = this;
    if (typeof optionalPeriod == "number") {
        period = optionalPeriod;
        completer = optionalCallback;
        updater = optionalUpdateCallback;
    } else {
        completer = arguments[1];
        updater = arguments[2];
    }
    chunks = Math.floor(duration / period);

    //PRIVATE functions...
    function chunkComplete() {
        if (count++ >= chunks) {
            if (completer) completer.call(self, chunks, count); //do callback, if supplied
        } else {
                var curr = new Date().getTime();
                var diff = curr - _start - count * period;
                var remaining = Math.max(0, duration - (curr - _start));
                if (Math.floor(remaining / 100 % 600 === 0)) {
                    alert('SHOT!!!!'); //ALERTS OUT EVERY MINUTE TO CALL FOR A SHOT
                }
                timerInstance = window.setTimeout(chunkComplete, period - diff);
                if (updater) updater.call(self, remaining); //do callback, if supplied
            }
    }
    return {

        //PUBLIC functions...
        start: function start() {
            timerInstance = window.setTimeout(chunkComplete, period);
            _start = new Date().getTime();
        },
        cancel: function cancel() {
            if (timerInstance) window.clearTimeout(timerInstance);
        }
    };
}

},{"../actions/ChallengeActions":3,"../stores/ChallengeStore":17,"react":"react","react-webcam":38}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //THE MAIN PAGE AT FOR / INDEX

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _HomeStore2.default.listen(this.onChange);
      _HomeActions2.default.getChallenges();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _HomeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(character) {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var challengeNodes = this.state.challenges.map(function (challenge, index) {
        return _react2.default.createElement(
          'div',
          { key: challenge.characterId, className: 'col-md-4' },
          _react2.default.createElement(
            'div',
            { className: 'thumbnail' },
            _react2.default.createElement('img', { onClick: _this2.handleClick.bind(_this2, challenge), src: challenge.image }),
            _react2.default.createElement(
              'div',
              { className: 'caption text-center', onClick: _this2.handleClick.bind(_this2, challenge) },
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/challenges/' + challenge.name },
                  _react2.default.createElement(
                    'strong',
                    null,
                    challenge.name
                  )
                )
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h3',
          { className: 'text-center large-text' },
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'u',
              null,
              'PICK YOUR POISON'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          challengeNodes
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":4,"../stores/HomeStore":18,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      //NavbarActions.getCharacterCount();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}

    //NOTICE THE LINK COMPONENTS ARE USED TO ROUTE

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-inverse navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            'PowerHour'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/add' },
                'Add Bro'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/addChallenge' },
                'Add Challenge'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/completedChalleges' },
                'Completed Challenges'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":5,"../stores/NavbarStore":19,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddChallengeStore = require('../stores/AddChallengeStore');

var _AddChallengeStore2 = _interopRequireDefault(_AddChallengeStore);

var _AddChallengeActions = require('../actions/AddChallengeActions');

var _AddChallengeActions2 = _interopRequireDefault(_AddChallengeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddChallenge = function (_React$Component) {
  _inherits(AddChallenge, _React$Component);

  function AddChallenge(props) {
    _classCallCheck(this, AddChallenge);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddChallenge).call(this, props));

    _this.state = _AddChallengeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(AddChallenge, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AddChallengeStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _AddChallengeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var description = this.state.description;
      var image = this.state.image;
      var shots = this.state.shots;
      var time = this.state.time;
      var typeAlcohol = this.state.typeAlcohol;
      console.log('here');
      if (name && description && image && shots && time && typeAlcohol) {
        console.log('adding?');
        _AddChallengeActions2.default.addChallenge(name, image, shots, time, typeAlcohol, description);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Add Challenge'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'panel-body' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    'Challenge Name'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                    onChange: _AddChallengeActions2.default.updateName, autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    'Number of Shots'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.shots,
                    onChange: _AddChallengeActions2.default.updateShots, autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    'Time Allowed (Mins)'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.time,
                    onChange: _AddChallengeActions2.default.updateTime, autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'label',
                    { className: 'control-label' },
                    'Type of Alcohol'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.typeAlcohol,
                    onChange: _AddChallengeActions2.default.updateTypeAlcohol, autoFocus: true, required: true }),
                  'Other:',
                  _react2.default.createElement('textarea', { className: 'form-control', rows: '4', ref: 'textAreaField', value: this.state.description,
                    onChange: _AddChallengeActions2.default.updateDescription, autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'label',
                    { 'class': 'control-label' },
                    'ImageURL:'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'imageTextField', value: this.state.image,
                    onChange: _AddChallengeActions2.default.updateImage, autoFocus: true, required: true }),
                  _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Create Challenge'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddChallenge;
}(_react2.default.Component);

exports.default = AddChallenge;

},{"../actions/AddChallengeActions":2,"../stores/AddChallengeStore":16,"react":"react"}],13:[function(require,module,exports){
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

},{"./routes":14,"history/lib/createBrowserHistory":28,"react":"react","react-dom":"react-dom","react-router":"react-router"}],14:[function(require,module,exports){
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

var _AddBro = require('./components/AddBro');

var _AddBro2 = _interopRequireDefault(_AddBro);

var _addChallenge = require('./components/addChallenge');

var _addChallenge2 = _interopRequireDefault(_addChallenge);

var _Challenge = require('./components/Challenge');

var _Challenge2 = _interopRequireDefault(_Challenge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Notice it sets the routes component to app.

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddBro2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/addChallenge', component: _addChallenge2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/challenges/:id', component: _Challenge2.default })
);

},{"./components/AddBro":7,"./components/App":8,"./components/Challenge":9,"./components/Home":10,"./components/addChallenge":12,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddBroActions = require('../actions/AddBroActions');

var _AddBroActions2 = _interopRequireDefault(_AddBroActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddBroStore = function () {
  function AddBroStore() {
    _classCallCheck(this, AddBroStore);

    this.bindActions(_AddBroActions2.default);
    this.name = '';
    this.gender = '';
    this.drink = '';
    this.helpBlock = '';
  }

  _createClass(AddBroStore, [{
    key: 'onAddBroSuccess',
    value: function onAddBroSuccess(successMessage) {
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddBroFail',
    value: function onAddBroFail(errorMessage) {
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
    }
  }, {
    key: 'onUpdateGender',
    value: function onUpdateGender(event) {
      this.gender = event.target.value;
    }
  }, {
    key: 'onUpdateDrink',
    value: function onUpdateDrink(event) {
      this.drink = event.target.value;
    }
  }]);

  return AddBroStore;
}();

exports.default = _alt2.default.createStore(AddBroStore);

},{"../actions/AddBroActions":1,"../alt":6}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddChallengeActions = require('../actions/AddChallengeActions');

var _AddChallengeActions2 = _interopRequireDefault(_AddChallengeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddChallengeStore = function () {
  function AddChallengeStore() {
    _classCallCheck(this, AddChallengeStore);

    this.bindActions(_AddChallengeActions2.default);
    this.name = '';
    this.description = '';
    this.image = '';
    this.shots = '';
    this.time = '';
    this.typeAlcohol = '';
  }

  _createClass(AddChallengeStore, [{
    key: 'onAddChallengeSuccess',
    value: function onAddChallengeSuccess(successMessage) {
      // this.nameValidationState = 'has-success';
      // this.helpBlock = successMessage;
      alert('Success!');
    }
  }, {
    key: 'onAddChallengeFail',
    value: function onAddChallengeFail(errorMessage) {
      // this.nameValidationState = 'has-error';
      // this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.name = event.target.value;
    }
  }, {
    key: 'onUpdateDescription',
    value: function onUpdateDescription(event) {
      this.description = event.target.value;
    }
  }, {
    key: 'onUpdateImage',
    value: function onUpdateImage(event) {
      this.image = event.target.value;
    }
  }, {
    key: 'onUpdateShots',
    value: function onUpdateShots(event) {
      this.shots = event.target.value;
    }
  }, {
    key: 'onUpdateTime',
    value: function onUpdateTime(event) {
      this.time = event.target.value;
    }
  }, {
    key: 'onUpdateTypeAlcohol',
    value: function onUpdateTypeAlcohol(event) {
      this.typeAlcohol = event.target.value;
    }
  }]);

  return AddChallengeStore;
}();

exports.default = _alt2.default.createStore(AddChallengeStore);

},{"../actions/AddChallengeActions":2,"../alt":6}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ChallengeActions = require('../actions/ChallengeActions');

var _ChallengeActions2 = _interopRequireDefault(_ChallengeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChallengeStore = function () {
  function ChallengeStore() {
    _classCallCheck(this, ChallengeStore);

    this.bindActions(_ChallengeActions2.default);
    this.challengeId = '';
    this.name = '';
    this.description = '';
    this.image = '';
    this.shots = '';
    this.time = '';
    this.typeAlcohol = '';
  }

  _createClass(ChallengeStore, [{
    key: 'onGetChallengeSuccess',
    value: function onGetChallengeSuccess(data) {
      console.log('THE DATAAA', data);
      (0, _underscore.assign)(this, data);
    }
  }, {
    key: 'onGetChallengeFail',
    value: function onGetChallengeFail() {
      console.log('FAILED');
    }
  }]);

  return ChallengeStore;
}();

exports.default = _alt2.default.createStore(ChallengeStore);

},{"../actions/ChallengeActions":3,"../alt":6,"underscore":"underscore"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_HomeActions2.default);
    this.challenges = [];
  }

  _createClass(HomeStore, [{
    key: 'onGetChallengesSuccess',
    value: function onGetChallengesSuccess(data) {
      this.challenges = data;
    }
  }, {
    key: 'onGetChallengesFail',
    value: function onGetChallengesFail(errorMessage) {}
  }]);

  return HomeStore;
}();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":4,"../alt":6}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function NavbarStore() {
  _classCallCheck(this, NavbarStore);

  this.bindActions(_NavbarActions2.default);
  this.totalCharacters = 0;
  this.onlineUsers = 0;
}

// onUpdateOnlineUsers(data) {
//   this.onlineUsers = data.onlineUsers;
// }

// onGetCharacterCountSuccess(data) {
//   this.totalCharacters = data.count;
// }

// onGetCharacterCountFail(jqXhr) {
//   toastr.error("failed to get characters");
// }
;

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":5,"../alt":6}],20:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":21,"./lib/keys.js":22}],21:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],22:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],23:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],24:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],25:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":37,"warning":39}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],28:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":23,"./DOMStateStorage":25,"./DOMUtils":26,"./ExecutionEnvironment":27,"./createDOMHistory":29,"./parsePath":34,"_process":37,"invariant":36}],29:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":26,"./ExecutionEnvironment":27,"./createHistory":30,"_process":37,"invariant":36}],30:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":23,"./AsyncUtils":24,"./createLocation":31,"./deprecate":32,"./parsePath":34,"./runTransitionHook":35,"deep-equal":20}],31:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":23,"./parsePath":34}],32:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],33:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],34:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":33,"_process":37,"warning":39}],35:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":37,"warning":39}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":37}],37:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],38:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Webcam"] = factory(require("react"), require("react-dom"));
	else
		root["Webcam"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	function hasGetUserMedia() {
	  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}

	var Webcam = (function (_Component) {
	  _inherits(Webcam, _Component);

	  _createClass(Webcam, null, [{
	    key: 'defaultProps',
	    value: {
	      audio: true,
	      height: 480,
	      width: 640,
	      screenshotFormat: 'image/webp',
	      onUserMedia: function onUserMedia() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      audio: _react.PropTypes.bool,
	      onUserMedia: _react.PropTypes.func,
	      height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      screenshotFormat: _react.PropTypes.oneOf(['image/webp', 'image/png', 'image/jpeg']),
	      className: _react.PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'mountedInstances',
	    value: [],
	    enumerable: true
	  }, {
	    key: 'userMediaRequested',
	    value: false,
	    enumerable: true
	  }]);

	  function Webcam() {
	    _classCallCheck(this, Webcam);

	    _Component.call(this);
	    this.state = {
	      hasUserMedia: false
	    };
	  }

	  Webcam.prototype.componentDidMount = function componentDidMount() {
	    if (!hasGetUserMedia()) return;

	    Webcam.mountedInstances.push(this);

	    if (!this.state.hasUserMedia && !Webcam.userMediaRequested) {
	      this.requestUserMedia();
	    }
	  };

	  Webcam.prototype.requestUserMedia = function requestUserMedia() {
	    var _this = this;

	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

	    var sourceSelected = function sourceSelected(audioSource, videoSource) {
	      var constraints = {
	        video: {
	          optional: [{ sourceId: videoSource }]
	        }
	      };

	      if (_this.props.audio) {
	        constraints.audio = {
	          optional: [{ sourceId: audioSource }]
	        };
	      }

	      navigator.getUserMedia(constraints, function (stream) {
	        Webcam.mountedInstances.forEach(function (instance) {
	          return instance.handleUserMedia(null, stream);
	        });
	      }, function (e) {
	        Webcam.mountedInstances.forEach(function (instance) {
	          return instance.handleUserMedia(e);
	        });
	      });
	    };

	    if (this.props.audioSource && this.props.videoSource) {
	      sourceSelected(this.props.audioSource, this.props.videoSource);
	    } else {
	      if ('mediaDevices' in navigator) {
	        navigator.mediaDevices.enumerateDevices().then(function (devices) {
	          var audioSource = null;
	          var videoSource = null;

	          devices.forEach(function (device) {
	            if (device.kind === 'audio') {
	              audioSource = device.id;
	            } else if (device.kind === 'video') {
	              videoSource = device.id;
	            }
	          });

	          sourceSelected(audioSource, videoSource);
	        })['catch'](function (error) {
	          console.log(error.name + ': ' + error.message); // eslint-disable-line no-console
	        });
	      } else {
	          MediaStreamTrack.getSources(function (sources) {
	            var audioSource = null;
	            var videoSource = null;

	            sources.forEach(function (source) {
	              if (source.kind === 'audio') {
	                audioSource = source.id;
	              } else if (source.kind === 'video') {
	                videoSource = source.id;
	              }
	            });

	            sourceSelected(audioSource, videoSource);
	          });
	        }
	    }

	    Webcam.userMediaRequested = true;
	  };

	  Webcam.prototype.handleUserMedia = function handleUserMedia(error, stream) {
	    if (error) {
	      this.setState({
	        hasUserMedia: false
	      });

	      return;
	    }

	    var src = window.URL.createObjectURL(stream);

	    this.stream = stream;
	    this.setState({
	      hasUserMedia: true,
	      src: src
	    });

	    this.props.onUserMedia();
	  };

	  Webcam.prototype.componentWillUnmount = function componentWillUnmount() {
	    var index = Webcam.mountedInstances.indexOf(this);
	    Webcam.mountedInstances.splice(index, 1);

	    if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
	      if (this.stream.stop) {
	        this.stream.stop();
	      } else {
	        if (this.stream.getVideoTracks) {
	          for (var _iterator = this.stream.getVideoTracks(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;

	            if (_isArray) {
	              if (_i >= _iterator.length) break;
	              _ref = _iterator[_i++];
	            } else {
	              _i = _iterator.next();
	              if (_i.done) break;
	              _ref = _i.value;
	            }

	            var track = _ref;

	            track.stop();
	          }
	        }
	        if (this.stream.getAudioTracks) {
	          for (var _iterator2 = this.stream.getAudioTracks(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
	            var _ref2;

	            if (_isArray2) {
	              if (_i2 >= _iterator2.length) break;
	              _ref2 = _iterator2[_i2++];
	            } else {
	              _i2 = _iterator2.next();
	              if (_i2.done) break;
	              _ref2 = _i2.value;
	            }

	            var track = _ref2;

	            track.stop();
	          }
	        }
	      }
	      Webcam.userMediaRequested = false;
	      window.URL.revokeObjectURL(this.state.src);
	    }
	  };

	  Webcam.prototype.getScreenshot = function getScreenshot() {
	    if (!this.state.hasUserMedia) return null;

	    var canvas = this.getCanvas();
	    return canvas.toDataURL(this.props.screenshotFormat);
	  };

	  Webcam.prototype.getCanvas = function getCanvas() {
	    if (!this.state.hasUserMedia) return null;

	    var video = _reactDom.findDOMNode(this);
	    if (!this.ctx) {
	      var _canvas = document.createElement('canvas');
	      _canvas.height = video.clientHeight;
	      _canvas.width = video.clientWidth;
	      this.canvas = _canvas;
	      this.ctx = _canvas.getContext('2d');
	    }

	    var ctx = this.ctx;
	    var canvas = this.canvas;

	    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

	    return canvas;
	  };

	  Webcam.prototype.render = function render() {
	    return _react2['default'].createElement('video', {
	      autoPlay: true,
	      width: this.props.width,
	      height: this.props.height,
	      src: this.state.src,
	      className: this.props.className
	    });
	  };

	  return Webcam;
	})(_react.Component);

	exports['default'] = Webcam;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
},{"react":"react","react-dom":"react-dom"}],39:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":37}]},{},[13])


//# sourceMappingURL=bundle.js.map
