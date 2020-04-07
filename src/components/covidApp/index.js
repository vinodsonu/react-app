/*global React*/
/*global fetch*/
import React from 'react';
import { withRouter } from "react-router-dom"
import './index.css';
import Covid19 from "./Covid19"
let noOfCountries = 0;
let countriesData = [];
class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], CountriesToDisplay: [], imageIsChecked: false, mode: 'lightMode' };
    }
    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => { return resp.json() })
            .then((data) => {
                this.setState({
                    data: data,
                })
                countriesData = this.state.data;
            })
    }
    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onSubmit(event.target.value);
            event.target.value = "";
        }
    }
    onSubmit = (inputCountry) => {
        let temp = [];
        countriesData.map((country) => {
            if (country.name.includes(inputCountry))
                temp.push(country);
            this.setState({ data: temp });
        })
    }
    onChange = (event) => {
        let temp = [];
        if (event.target.value === "All")
            temp = this.state.data;
        else {
            countriesData.map((country) => {
                if (country.region === event.target.value)
                    temp.push(country);
            })
        }
        this.setState({ data: temp });
    }
    imageClick = (event) => {
        let temp = [];
        countriesData.map((country) => {
            if (country.alpha3Code === event.target.parentNode.parentNode.id) {
                temp.push(country);
            }
        })
        this.setState({ data: temp });
        this.setState({ imageIsChecked: true });
    }
    changeImageState = () => {
        this.setState({ imageIsChecked: false });
        this.setState({ data: countriesData });
    }
    changeMode = (event) => {
        if (this.state.mode == 'lightMode')
            this.setState({ mode: 'darkMode' })
        else
            this.setState({ mode: 'lightMode' })
    }
    render() {
        let componentToBeDisplayed = (this.state.imageIsChecked === false) ? (
            <div className={`CovidCountryApp ${(this.state.mode=='lightMode')?('light-mode'):('dark-mode')}`} id="countries">
            <div className="header"><span>where in the world!</span>
                        <button onClick={this.changeMode} className="mode-btn">mode</button>
            </div>
            <div className="search-bar-div">
                        <input  className="search-field"  placeholder="country" type="text" name="" onKeyDown={this.onKeyDown}/>
  <select className="country-dropdown" onChange={this.onChange}>
  <option value="All">All</option>
  <option value="Africa">Africa</option>
  <option value="Americas">Americas</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
</select>
            </div>
            <div className="countries-container">
            {this.state.data.map((countryData)=>{
              return <Country data={countryData} click={this.imageClick} /> 
            })}
            </div>
            </div>
        ) : (<div className={` ${(this.state.mode=='lightMode')?('light-mode'):('dark-mode')}`}>
        <div className="CovidCountryApp" id="country">
            <div className="header"><span>where in the world!</span>
            <button onClick={this.changeMode} className="mode-btn">mode</button>
            </div>
        </div>
        <button className="back-btn" onClick={this.changeImageState}>back</button>
        <div className="countries-container">
            {this.state.data.map((countryData)=>{
               return (<div className="country-container">
               <Country data={countryData} click={this.imageClick}/>
               <Covid19 country3Code={countryData.alpha3Code}/>
               </div> )
            })}
            </div>
        </div>)
        return componentToBeDisplayed;
    }
}
class Country extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isImageZoomed: false }
    }
    zoomInImage = (event) => {
        this.setState({ isImageZoomed: true })
    }
    render() {
        return (
            <div className={`country-div ${(this.state.isImageZoomed===true)?('zoom'):('')}`}  onClick={this.props.click} onMouseOver={this.zoomInImage} id={this.props.data.alpha3Code}>
            <div>{<img className="img-dimensions" src={this.props.data.flag}/>}</div>
                <div className="country-name">{this.props.data.name}</div>
                <div className="country-population">population:{this.props.data.population}</div>
                <div className="country-region">Region:{this.props.data.region}</div>
                <div className="country-capital">Capital:{this.props.data.capital}</div>
                </div>
        )
    }
}
export default CountryList;
