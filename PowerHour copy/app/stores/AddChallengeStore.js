import alt from '../alt';
import AddChallengeActions from '../actions/AddChallengeActions';

class AddChallengeStore {
  constructor() {
    this.bindActions(AddChallengeActions);  
    this.name = '';
    this.description = '';
    this.image = '';
    this.shots = '';
    this.time = '';
    this.typeAlcohol = '';
  }

  onAddChallengeSuccess(successMessage) {
    // this.nameValidationState = 'has-success';
    // this.helpBlock = successMessage;
    alert('Success!');
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

  onUpdateShots(event) {
    this.shots = event.target.value;
  }

  onUpdateTime(event) {
    this.time = event.target.value;
  }

  onUpdateTypeAlcohol(event) {
    this.typeAlcohol = event.target.value;
  }
}

export default alt.createStore(AddChallengeStore);