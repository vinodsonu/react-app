import React from "react";
import { Link, Redirect } from "react-router-dom";
import { observer } from 'mobx-react';
import logo from "../../logo.svg";
import { observable, action, computed, reaction } from 'mobx';
import { getAccessToken } from '../../utils/StorageUtils'

@observer
class HomePage extends React.Component {
  render() {

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page 1</Link>
        <Link to="/Login-App">LoginApp</Link>
         <Link to="/Sign-In">SignInForm</Link>
        <Link to="/ECommerce-App">ECommerceApp</Link>
        <Link to="/grid-game">Gridgame</Link>
        <Link to="/Event-App">Event-App</Link>
        <Link to="mobx-store-todo-app">TodoApp v2</Link>
        <Link to="/country-dashboard-app">covid19-v2</Link>
        <Link to="/emojigame">emojigame</Link>
        <Link to="/counter-app">counterApp</Link>
        <Link to="/UsersPage">UsersPage</Link>
        
      </header>
    </div>
    );
  }
}
export default HomePage

/*function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page 1</Link>
        <Link to="/grid-game">Gridgame</Link>
        <Link to="/Event-App">Event-App</Link>
        <Link to="mobx-store-todo-app">TodoApp v2</Link>
        <Link to="/country-dashboard-app">covid19-v2</Link>
        <Link to="/emojigame">emojigame</Link>
        <Link to="/counter-app">counterApp</Link>
        <Link to="/UsersPage">UsersPage</Link>
        
      </header>
    </div>
  );
}

export default App;*/
