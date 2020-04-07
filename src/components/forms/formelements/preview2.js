/*global React*/
/*global ReactDOM*/
import React from 'react';
import './preview2.css';
import Navbar from './navbar.js';
class Favouritedessert extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '', displayValue: '' }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    handleSubmit = (event) => {
        this.setState({ displayValue: this.state.value.toUpperCase() });
        this.setState({ value: '' });
    }
    render() {
        return (<div>
        <Navbar title="Favouritedessert"/>
        <div  className="favorite-dish">
        <div>whats your favorite dessert?</div>
        <div className="items-list">
        {this.props.dessertList.map((item)=>{
           return( <div>
           <label>
            <input
                          type="radio"
                          value={item}
                          checked={this.state.value===item}
                          onChange={this.handleChange}
                        /> { item } 
            </label>
            </div > )
        })}
        </div>
        <button className="submit-btn-1" type="submit"  onClick={this.handleSubmit}>make your choice</button>
        {this.state.displayValue==''||<div>my favorite desert is {this.state.displayValue}</div>}
        </div>
        </div>)
    }
}
export default Favouritedessert;
