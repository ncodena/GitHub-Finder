import React, {Fragment, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';
import './App.css';

import GithubState from './context/github/GithubState';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);



  // Search a single GitHub user

  const getUser = async (userName) => {

    // this.setState({loading: true});

    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data)
    setLoading(false);

    // console.log(res)

  }

  // Get users repos

  const getUserRepos = async (userName) => {

    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // this.setState({repos: res.data, loading: false});

    setRepos(res.data)
    setLoading(false);

  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    
    setTimeout(() => setAlert(null), 5000)
  };

  return (
    <GithubState>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path= '/' render={props =>
              <Fragment>
                <Search 
          
                clearUsers={clearUsers} 
                showClear={users.length > 0 ? true: false}
                setAlert={showAlert} />
                <Users loading={loading} users={users}/>
              </Fragment>
              }/>
              <Route exact path = '/about' component={About}/>
              <Route exact path = '/user/:login' render={props => (
                <User {...props} getUser={getUser} user={user} getUserRepos={getUserRepos} repos={repos} loading={loading}/>
              )} />
          </Switch>
        </div>
      </div>
    </Router>
  </GithubState>
  );
}

export default App;
