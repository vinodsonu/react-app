import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { observable } from 'mobx';
import { observer } from 'mobx-react';

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
import GridMemoryGame from './components/GridMemoryGame/Components/GridMemoryGame'
import "./App.css";

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
      <Route exact path="/grid-game">
          <GridMemoryGame />
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
