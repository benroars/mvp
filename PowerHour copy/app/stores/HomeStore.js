import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.challenges = [];
  }

  onGetChallengesSuccess(data) {
    this.challenges = data;
  }

  onGetChallengesFail(errorMessage) {

  }

}

export default alt.createStore(HomeStore);