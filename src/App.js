import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observable } from 'mobx';
import { observer, Provider } from 'mobx-react';

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from './components/covid19-v2/index'
import CounterApp from './components/CounterApp/index'
import EmojiGame from './components/emojigame/index'
import WinOrLoss from './components/emojigame/components/WinOrLoss'
import CountryDetails from './components/covid19-v2/CountryDetails/index'
import CounterPage from './components/CounterPage/index'
import TodoApp from './components/mobx-todo-app/index'
import EventApp from './components/EventsApp/components/EventsApp'
import themeStore from './stores/ThemeStore/index'
import UsersPage from './components/UsersPage/index.js'
import GridMemoryGame from './components/GridMemoryGame/Components/GridMemoryGame'
import stores from './stores'
import "./App.css";

/*var color = function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function() {
  document.getElementById("root").style.backgroundColor = color();
}, 200);*/

@observer
class App extends React.Component {
  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }
  onChangeTheme = () => {
    themeStore.setCurrentTheme(themeStore.selectedTheme.id);
  }
  componentDidMount() {
    let currentTheme = localStorage.getItem('selectedTheme')
    if (currentTheme) {
      themeStore.selectedTheme = JSON.parse(localStorage.getItem('selectedTheme'))
    }
  }
  componentDidUpdate() {
    localStorage.setItem('selectedTheme', JSON.stringify(themeStore.selectedTheme))
  }
  render() {
    return (
      <Provider  {...stores}>
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/Event-App">
          <EventApp />
        </Route>
      <Route exact path="/grid-game">
          <GridMemoryGame selectedTheme = { this.getCurrentTheme() } onChangeTheme = { this.onChangeTheme }/>
        </Route>
        <Route exact path="/counter-page">
          <CounterPage />
        </Route>
        <Route exact path="/mobx-store-todo-app">
        <TodoApp/>
        </Route>
        <Route exact path="/counter-app">
        <CounterApp/>
        </Route>
        <Route exact path="/UsersPage" component={UsersPage}></Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/country-dashboard-app">
          <CountriesDashboardApp selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
          </Route>
          <Route exact path="/country-dashboard-app/:countryId">
          <CountryDetails selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
          </Route>
          <Route exact path="/emojigame">
          <EmojiGame selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme}/>
          </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
    );
  }
};

export default App;
