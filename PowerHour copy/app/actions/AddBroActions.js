import alt from '../alt';

class AddBroActions {
  constructor() {
    this.generateActions(
      'addBroSuccess',
      'addBroFail',

      'updateName',
      'updateGender',
      'updateDrink'
    );
  }

  addBro(name, gender, drink) {
    $.ajax({
      type: 'POST',
      url: '/api/characters',
      data: { name: name, gender: gender, drink: drink}
    })
      .done((data) => {
        this.actions.addBroSuccess(data.message);
      })
      .fail((data) => {
        this.actions.addBroFail('User already in database');
      });
  }
}

export default alt.createActions(AddBroActions);