/*global onGoBack*/
import React from "react";
import Greetings from "./formelements/preview1.js"
import Favouritedessert from "./formelements/preview2.js"
import VisitedPlaces from "./formelements/preview3.js"
import Yourstate from "./formelements/preview4.js"
import DisableOrEnable from "./formelements/preview5.js"
import Navbar from './formelements/navbar.js';
import Home from './home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

class formcomponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    }
  }
  render() {
    return (
      <div>
        <Router>
      <div>
        <Switch>
          <Route path="/greetings">
          <Greetings/>
          </Route>
          <Route path="/favoritedessert">
          {<Favouritedessert dessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>}
          </Route>
          <Route path="/visitedplaces">
          {<VisitedPlaces cities={["hyderabad","chennai","banglore","pune","mumbai","kerala"]}/>}
          </Route>
          <Route path="/yourstate">
          {<Yourstate states={["Andra pradesh","goa","pandcherry","kerala","maharastra","orissa"]}/>}
          </Route>
          <Route path="/disablebtn">
          <DisableOrEnable/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
}
export default formcomponents;
