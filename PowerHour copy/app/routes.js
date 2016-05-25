import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddBro from './components/AddBro';
import AddChallenge from './components/addChallenge';
import Challenge from './components/Challenge';
//Notice it sets the routes component to app.

export default (
  <Route component={App}> 
    <Route path='/' component={Home} />
    <Route path='/add' component={AddBro} />
    <Route path='/addChallenge' component={AddChallenge} />
    <Route path='/challenges/:id' component={Challenge} />
  </Route>
);


