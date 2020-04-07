/*global React*/
/*global ReactDOM*/
import React from 'react';
import './preview4.css';
import Navbar from './navbar.js';
class Yourstate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedState: '',
            submittedState: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            selectedState: event.target.value,
        })
    }
    handleSubmit = (event) => {
        let state = this.state.selectedState;
        this.setState({
            submittedState: state,
        })
    }
    render() {
        return (
            <div>
            <Navbar title="Yourstate"/>
            <div className="state-container">
            <select className="dropDown"  onChange={this.handleChange}>
            <option value="select state" disabled selected>select your state</option>
            {this.props.states.map((state)=>{
                return <option  value={state}>{state}</option>
            })}
            </select>
            <div><button className="submit-btn"  onClick={this.handleSubmit}>submit</button></div>
            {this.state.submittedState!=''&&
                <div>i am from {this.state.submittedState}</div>
            }
            </div>
            </div>
        )
    }
}
export default Yourstate;
