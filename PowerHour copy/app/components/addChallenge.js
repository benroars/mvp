import React from 'react';
import AddChallengeStore from '../stores/AddChallengeStore';
import AddChallengeActions from '../actions/AddChallengeActions';

class AddChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddChallengeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddChallengeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddChallengeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var description = this.state.description;
    var image = this.state.image;
    var shots = this.state.shots;
    var time = this.state.time;
    var typeAlcohol = this.state.typeAlcohol;
    console.log('here');
    if (name && description && image && shots && time && typeAlcohol) {
      console.log('adding?');
      AddChallengeActions.addChallenge(name, image, shots, time, typeAlcohol, description);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'><strong>Add Challenge</strong></div>
              <div className='panel-body'>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label className='control-label'>Challenge Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddChallengeActions.updateName} autoFocus required/>
                  
                    <label className='control-label'>Number of Shots</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.shots}
                           onChange={AddChallengeActions.updateShots} autoFocus required/>

                    <label className='control-label'>Time Allowed (Mins)</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.time}
                           onChange={AddChallengeActions.updateTime} autoFocus required/>

                    <label className='control-label'>Type of Alcohol</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.typeAlcohol}
                           onChange={AddChallengeActions.updateTypeAlcohol} autoFocus required/>
                    Other:
                    <textarea className='form-control' rows='4' ref='textAreaField' value={this.state.description}
                      onChange={AddChallengeActions.updateDescription} autoFocus required/>

                  <label class="control-label">ImageURL:</label>
                  <input type="text" className='form-control' ref ='imageTextField' value={this.state.image}
                    onChange={AddChallengeActions.updateImage} autoFocus required/>

                  <button type='submit' className='btn btn-primary'>Create Challenge</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddChallenge;