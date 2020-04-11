import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from './components/covid19-v2/index.js'
import CounterApp from './components/counter-app/index.js'
import EmojiGame from './components/emojigame/index.js'
import WinOrLoss from './components/emojigame/components/WinOrLoss.js'
import CountryDetails from './components/covid19-v2/CountryDetails/index.js'
import CounterPage from './components/CounterPage/index.js'
import TodoApp from './components/mobx-todo-app/index.js'
import EventApp from './components/EventsApp/components/EventsApp.js'
import "./App.css";
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import themeStore from './stores/ThemeStore/index.js'
@observer
class App extends React.Component {
  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }
  onChangeTheme = () => {
    themeStore.setCurrentTheme(themeStore.selectedTheme.id);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/Event-App">
          <EventApp />
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
    );
  }
};

export default App;
