import React from 'react';
import AddBroStore from '../stores/AddBroStore';
import AddBroActions from '../actions/AddBroActions';

class AddBro extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddBroStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddBroStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddBroStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var gender = this.state.gender;
    var drink = this.state.drink;

    if (name && gender && drink) {
      AddBroActions.addBro(name, gender, drink);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Add Bro</div>
              <div className='panel-body'>
                
                <form onSubmit={this.handleSubmit.bind(this)}>  
                    <label className='control-label'>Bro's Name</label>
                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                           onChange={AddBroActions.updateName.bind(this)} autoFocus required/>
                    <span className='help-block'>{this.state.helpBlock}</span>
                  

                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                             onChange={AddBroActions.updateGender}/>
                      <label htmlFor='female'>Male</label>
                    </div>

                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                             onChange={AddBroActions.updateGender}/>
                      <label htmlFor='male'>Female</label>
                    </div>

                   
                    <div>Drink of Choice:</div>
                    <input type='text' className='form-control' ref='drinkTextField' value={this.state.drink}
                           onChange={AddBroActions.updateDrink.bind(this)} autoFocus/>

                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddBro;



