import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getChallengesSuccess',
      'getChallengesFail'
    );
  }

  getChallenges() {
    $.ajax({ url: '/api/challenges' })
      .done(data => {
        this.actions.getChallengesSuccess(data);
      })
      .fail(data => {
        this.actions.getChallengesFail('Failed to load challenges D:');
      });
  }

}

export default alt.createActions(HomeActions);