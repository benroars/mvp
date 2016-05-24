import alt from '../alt';

class AddChallengeActions {
  constructor() {
    this.generateActions(
      'addChallengeSuccess',
      'addChallengeFail',
      'updateName',
      'updateDescription',
      'updateImage',
      'updateShots',
      'updateTime',
      'updateTypeAlcohol'
    );
  }

  addChallenge(name, image, shots, time, typeAlcohol, description) {
    $.ajax({
      type: 'POST',
      url: '/api/challenges',
      data: { name: name, image: image, shots: shots, time: time, typeAlcohol: typeAlcohol, description: description}
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