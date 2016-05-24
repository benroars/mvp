//THE MAIN PAGE AT FOR / INDEX

import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getChallenges();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
   
  }

  render() {
    var challengeNodes = this.state.challenges.map((challenge, index) => {
      return (
        <div key={challenge.characterId} className={'col-md-4'}>
          <div className='thumbnail'>
            <img onClick={this.handleClick.bind(this, challenge)} src={challenge.image}/>
            <div className='caption text-center' onClick={this.handleClick.bind(this, challenge)}>
              <h4>
                <Link to={'/challenges/' + challenge.name}><strong>{challenge.name}</strong></Link>
                
              </h4>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center large-text'><strong><u>PICK YOUR POISON</u></strong></h3>
        <div className='row'>
          {challengeNodes}
        </div>
      </div>
    );
  }
}

export default Home;