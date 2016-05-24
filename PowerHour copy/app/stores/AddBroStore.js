import alt from '../alt';
import AddBroActions from '../actions/AddBroActions';

class AddBroStore {
  constructor() {
    this.bindActions(AddBroActions);
    this.name = '';
    this.gender = '';
    this.drink = '';
    this.helpBlock = '';
  }

  onAddBroSuccess(successMessage) {
    this.helpBlock = successMessage;
  }

  onAddBroFail(errorMessage) {
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
  }

  onUpdateGender(event) {
    this.gender = event.target.value;
  }

  onUpdateDrink(event) {
    this.drink = event.target.value;
  }
}

export default alt.createStore(AddBroStore);