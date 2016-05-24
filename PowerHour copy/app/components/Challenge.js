import React from 'react';
import ChallengeStore from '../stores/ChallengeStore';
import ChallengeActions from '../actions/ChallengeActions';
import Webcam from 'react-webcam';

//This example is has three sections of code. The first is the page-specific code, the second is some helpers, and the third is my customer ATimer class...

//(1) Page code
var x = {
  display:'none'
}

var WARNING_THRESHOLD = 4 * 60 * 1000; //4 minutes (in milliseconds)
var start = new Date().getTime();

function doStart() {
    var id = "CountDownPanel";
    var i = 10; //duration in seconds (10 minutes)
    ActivateCountDown(id, i);
}

function ActivateCountDown(strContainerID, initialValue) {
    var _countDownContainer = document.getElementById(strContainerID);
    var $_countDownContainer;

    if (!_countDownContainer) {
        alert("count down error: container does not exist: " + strContainerID +
                "\nmake sure html element with this ID exists");
    } else {
        $_countDownContainer = $(document.getElementById(strContainerID));
        //the ATimer below works with time values in milliseconds
        //the "20" will update display ever 20 milliseconds, as fast as screen refreshes
        $_countDownContainer.removeClass("warn");
        var timerID = new ATimer(initialValue * 1000, 20, CountDownComplete, CountDownTick);
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
    var partMultipliers = [{ d: 60000, p: 100 }, { d: 1000, p: 100 }, { d: 10, p: 100}];
    var remainder = parseInt(this);
    return partMultipliers.reduce(function (prev, m, idx) {
        var quotient = Math.floor(remainder / m.d); //m.d is divisor
        remainder -= (quotient * m.d);
        return prev + ((idx == 0) ? "" : ":") + (quotient + m.p).toString().substr(1);  //m.p is a framer
    }, "");
};

String.prototype.toMilliseconds = function () {
    /// <summary>Convert from string to number of milliseconds</summary>
    /// <param name="this">Duration, text in format MM:SS:mmm (mmm is milliseconds)</param>
    /// <returns type="Number">Number of milliseconds</returns>
    var partMultipliers = [1, 1000, 60000];
    var parts = this.split(":").reverse();
    return milliseconds = parts.reduce(function (prev, part, idx) {
        var res = (parseInt(part) * partMultipliers[idx]);
        return prev + res;
    }, 0);
};

//(3) Custom "ATimer" Class 
function ATimer(milliseconds, optionalPeriod, optionalCallback, optionalUpdateCallback) {
    //ensure this runs as a new instance upon each instantiation
    if (typeof ATimer != "function") return new ATimer.call(this, arguments);

    //PRIVATE properties...
    var timerInstance, duration = milliseconds, period = 20, count = 0, chunks, completer, updater;
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
            var diff = (curr - start) - (count * period);
            var remaining = Math.max(0, (duration - (curr - start)));
            timerInstance = window.setTimeout(chunkComplete, (period - diff));
            if (updater) updater.call(self, remaining); //do callback, if supplied
        }
    }
    return {

        //PUBLIC functions...
        start: function () {
            timerInstance = window.setTimeout(chunkComplete, period);
            start = new Date().getTime();
        },
        cancel: function () {
            if (timerInstance) window.clearTimeout(timerInstance);
        }
    };
}




class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = ChallengeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ChallengeStore.listen(this.onChange);
    console.log('THE PARAMS', this.props.params);
    ChallengeActions.getChallenge(this.props.params.id);

  }

  componentWillUnmount() {
    ChallengeStore.unlisten(this.onChange);
    $(document.body).removeClass();
  }

  componentDidUpdate(prevProps) {

  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(type) {
    //type.preventDefault();
    if(type === 1){ 
      document.getElementById("CountDownPanel").style.visibility = "visible";
      doStart();
    } else {
      document.getElementById("CountDownPanel").style.visibility = "hidden";
    }
  }

  render() {
    return (
      <div>
        <div className='pull-left container thumbnail'>
          <img src={this.state.image} />
        </div>
        <div>
          <Webcam className="cam pull-right" height="400" width="400"/>;
          <h3>{this.state.name}</h3>
          <div className="spacer">.</div>
          <h3>{this.state.description}</h3>
          <button type='submit' className='btn btn-primary btn-lg' onClick={this.handleClick.bind(this, 1)}>Start</button>
          <span className='addwid'>...</span>
          <button type='submit' className='btn btn-danger btn-lg'  onClick={this.handleClick.bind(this, 2)}>Failure</button>
          <span className='addwid'>...</span>
          <button type='submit' className='btn btn-success btn-lg'>AddPlayers</button>
        </div>

        <div id="CountDownPanel" className="pull-left timer"></div>
       
      </div>
    );
  }
}

export default Challenge;