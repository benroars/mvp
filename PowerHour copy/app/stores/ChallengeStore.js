import {assign} from 'underscore';
import alt from '../alt';
import ChallengeActions from '../actions/ChallengeActions';

class ChallengeStore {
  constructor() {
    this.bindActions(ChallengeActions);
    this.challengeId = '';
    this.name = '';
    this.description = '';
    this.image = '';
    this.shots = '';
    this.time = '';
    this.typeAlcohol = '';
  }

  onGetChallengeSuccess(data) {
    console.log('THE DATAAA', data);
    assign(this, data);
  }

  onGetChallengeFail() {
    console.log('FAILED');
  }

}

export default alt.createStore(ChallengeStore);