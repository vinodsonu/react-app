import React from 'react';
import Navbar from './formelements/navbar.js'
import {
    Link
}
from "react-router-dom"
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav>
            <Navbar/>
          <ul>
            <li>
              <Link to="/greetings">Greetings</Link>
            </li>
            <li>
            <Link to="/favoritedessert">favoritedessert</Link>
            </li>
            <li>
              <Link to="/visitedplaces">visited places</Link>
            </li>
            <li>
            <Link to="/yourstate">yourstate</Link>
            </li>
            <li>
            <Link to="/disablebtn">disable-btn</Link>
            </li>
          </ul>
        </nav>
        )
    }
}
export default Home;
