import alt from '../alt';

class ChallengeActions {
  constructor() {
    this.generateActions(
      'getChallengeSuccess',
      'getChallengeFail'
    );
  }

  getChallenge(challengeName) {
    console.log('THE CHALLENGE ID', challengeName);
    
    $.ajax({ url: '/api/challenges/' + challengeName})
      .done((data) => {
        this.actions.getChallengeSuccess(data);
      })
      .fail(() => {
        this.actions.getChallengeFail("Failed to get challenge");
      });
  }

}

export default alt.createActions(ChallengeActions);