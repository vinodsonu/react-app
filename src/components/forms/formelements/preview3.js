/*global React*/
/*global ReactDOM*/
import React from 'react';
import './preview3.css';
import Navbar from './navbar.js';
class VisitedPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedCountries: [],
            countriesToDisplay: [],
        }
    }
    handleCheckboxClick = (event) => {
        let citiesVisited = this.state.visitedCountries;
        if (event.target.checked === true)
            citiesVisited.push(event.target.value)
        else {
            let index = citiesVisited.indexOf(event.target.value);
            citiesVisited.splice(index, 1);
        }
        this.setState({
            visitedCountries: citiesVisited,
        })
    }
    handleSubmit = (event) => {

        let displayCountries = this.state.visitedCountries;
        this.setState({ countriesToDisplay: displayCountries })

    }
    render() {
        let countriesString = "";
        return (<div>
        <Navbar title="VisitedPlaces"/>
        <div className="countries-container-1">
        <div className="countries-1">
        {this.props.cities.map((city)=>{
           return(<CheckboxWithLabel city={city} handleChange={this.handleCheckboxClick}/>)
        })}
        </div>
        <button className="submit-btn-1" onClick={this.handleSubmit}>make your choice</button>
        {this.state.countriesToDisplay.map((country)=>{
          countriesString+=','+country;  
        })}
        {this.state.visitedCountries.length!=0&&
        <div>i visited {countriesString}.</div>}
        </div>
        </div>)
    }
}
class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
           <label>
            <input
            type="checkbox"
            value={this.props.city}
            onChange={this.props.handleChange}/> 
            {this.props.city} 
            </label>
            </div>
        )
    }
}
export default VisitedPlaces
