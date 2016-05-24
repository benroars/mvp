import alt from '../alt';

class AddChallengeActions {
  constructor() {
    this.generateActions(
      'addChallengeSuccess',
      'addChallengeFail',
      'updateName',
      'updateDescription',
      'updateImage'
    );
  }

  addChallenge(name, description, image) {
    $.ajax({
      type: 'POST',
      url: '/api/challenges',
      data: { name: name, description: description, image: image}
    })
      .done((data) => {
        this.actions.addChallengeSuccess(data.message);
      })
      .fail((data) => {
        this.actions.addChallengeFail('Challenge already in database');
      });
  }
}

export default alt.createActions(AddChallengeActions);