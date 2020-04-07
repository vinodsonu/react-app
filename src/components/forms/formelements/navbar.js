/*global React*/
/*global ReactDOM*/
/*global withRouter*/
import React from 'react';
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';
import './navbar.css';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (<div className="nav-bar">
        <button className="back-btn" onClick={this.goBack}>back</button>
        {this.props.title}
        </div>)
    }
}
export default withRouter(Navbar)
