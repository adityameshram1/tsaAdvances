import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from '../src/routes/index';

class App extends Component {
  render() {
    return (         
    <Router>
    <Switch>
           <Main />  
    </Switch>
   </Router>
    );
  }
}

export default App;