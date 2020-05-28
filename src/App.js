
// import ConversationsContainer from './containers/conversationsContainer'
// import { ActionCable } from 'react-actioncable-provider';
// import MessageContainer from './containers/messageContainer';
// import Cable from './components/cable';
// import { API_ROOT, HEADERS } from './constraints/index'
// import NavBar from './components/layout/NavBar'

import React, { Component } from 'react';
import Home from './containers/Home'
import Login from './components/Login'
import {BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {

  render() {
    return (
          <Router>
            <div>

              <Route path='/' component={Login} />
              <Route path='/home' component={Home} />
            </div>
          </Router>
      );
  }
}

export default App;
