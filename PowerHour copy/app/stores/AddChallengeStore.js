import alt from '../alt';
import AddChallengeActions from '../actions/AddChallengeActions';

class AddChallengeStore {
  constructor() {
    this.bindActions(AddChallengeActions);  
    this.name = '';
    this.description = '';
    this.image = '';
  }

  onAddChallengeSuccess(successMessage) {
    // this.nameValidationState = 'has-success';
    // this.helpBlock = successMessage;
  }

  onAddChallengeFail(errorMessage) {
    // this.nameValidationState = 'has-error';
    // this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
  }

  onUpdateDescription(event) {
    this.description = event.target.value;
  }

  onUpdateImage(event) {
    this.image = event.target.value;
  }
}

export default alt.createStore(AddChallengeStore);