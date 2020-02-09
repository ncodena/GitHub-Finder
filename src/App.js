import React from 'react';
import Navbar from './layouts/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends React.Component {
  render() {
  return (
      <div className="App">
        <Navbar icon='fab fa-github' title='GitHub Finder'/>
        <div className="container">
          <Users/>
        </div>
        
      </div>
    );
  }
}

export default App;
