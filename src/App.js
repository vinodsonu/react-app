import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import CountriesDashboardApp from './components/covid19-v2/index.js'
import EmojiGame from './components/emojigame/index.js'
import WinOrLoss from './components/emojigame/components/WinOrLoss.js'
import CountryDetails from './components/covid19-v2/CountryDetails/index.js'

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: App.themeOptions.light,
    }
  }
  onChangeTheme = (themeId) => {
    {
      if (themeId === '0')
        this.setState({ selectedTheme: App.themeOptions.dark });
      else
        this.setState({ selectedTheme: App.themeOptions.light });
    }
  }
  static themeOptions = {
    light: {
      id: "0",
      name: "#fff",
      fontColor: "#2b3945"
    },
    dark: {
      id: "1",
      name: "#2b3945",
      fontColor: "#fff",
    }
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/country-dashboard-app">
          <CountriesDashboardApp selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
          </Route>
          <Route exact path="/country-dashboard-app/:countryId">
          <CountryDetails selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
          </Route>
          <Route exact path="/emojigame">
          <EmojiGame selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
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
