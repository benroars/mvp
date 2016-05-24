import React from 'react';
import ChallengeStore from '../stores/ChallengeStore';
import ChallengeActions from '../actions/ChallengeActions'

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
    // Fetch new charachter data when URL path changes
    // if (prevProps.params.challengeId !== this.props.params.id) {
    //   ChallengeActions.getChallenge(this.props.params.id);
    // }
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div className='pull-left container thumbnail'>
          <img src={this.state.image} />
        </div>
        <div>
          <h3>{this.state.name}</h3>
          <h2>{this.state.description}</h2>
          <button type='submit' className='btn btn-primary btn-lg btn-overide'>Start</button>
          <button type='submit' className='btn btn-danger btn-lg btn-overide'>Restart</button>
        </div>
      </div>
    );
  }
}

export default Challenge;