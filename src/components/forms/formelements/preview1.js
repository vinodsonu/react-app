/*global React*/
/*global ReactDOM*/
import React from 'react';
import './preview1.css';
import Navbar from './navbar.js';
class Greetings extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '', name: '' };
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ name: this.state.value });
        this.setState({ value: '' });
    }
    render() {
        return (<div>
        <Navbar title={"greeting"}/>
        <form className="form" onSubmit={this.handleSubmit}>
        <input className="input-field" placeholder="Enter the message"type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="submit-btn" type="submit" value="submit">greet</button>
        {(this.state.name==='')||<div>hello {this.state.name} have a good day</div>}
        </form>
        
        </div>)
    }
}
export default Greetings;
