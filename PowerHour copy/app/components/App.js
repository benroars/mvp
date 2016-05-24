import React from 'react';
import Navbar from './Navbar';

//Because route component set to app, can use this.props.children to route based on the url

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}

export default App;