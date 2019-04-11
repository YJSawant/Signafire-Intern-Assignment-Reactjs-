import React, { Component } from 'react';
import Header from './Header.js';
import Messages from './Messages.js';


import './App.css';

class App extends Component {
constructor(props){
super(props);
this.state={
}
}

  render() {
    return (
      
        <div>
          <Header />
          <div>
          <Messages />
          </div>
        </div>
          
          
    );
  }
}

export default App;
