/*global React*/
/*global fetch*/
/*global history*/
import React from 'react';
import './index.css';
import { withRouter } from "react-router-dom";
import Header from './components/header.js'
import CountriesFilterBar from './components/countriesfilterbar.js'
import CountryDetails from "./CountryDetails/index.js"
import Countries from './components/countries.js'
import loaderIcon from './../covidApp/react/countryListAssets/loader-icon.svg'
class CountriesDashboardApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: null,
            selectedTheme: '',
            searchText: '',
            selectedRegion: 'All',
        }
    }
    componentDidMount() {
        this.getCountries()
    }
    getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => { return resp.json() })
            .then((data) => {
                this.setState({ countries: data })
            })
    }
    getRegionOptions = () => {
        let regionsSet = [];
        if (this.state.countries.length != 0)
            this.state.countries.map((country) => {
                if (regionsSet.indexOf(country.region) == -1) {
                    regionsSet.push(country.region);
                }
            })
        return regionsSet;
    }
    displayCountries = () => {
        let filteredCountriesBySearch = this.filterCountriesBySearchText();
        let filteredCountriesBySelectedRegion = this.filterCountriesBySelectedRegion();
        return (filteredCountriesBySelectedRegion.filter(value => filteredCountriesBySearch.includes(value)));


    }
    filterCountriesBySelectedRegion = () => {
        let selectedRegion = this.state.selectedRegion;
        let filteredCountries = [];
        (selectedRegion != "All") ? (this.state.countries.map((country) => {
            if (country.region === selectedRegion)
                filteredCountries.push(country);
        })) : (filteredCountries = this.state.countries);
        return (filteredCountries);
    }
    filterCountriesBySearchText = () => {
        let searchedText = this.state.searchText;
        let filteredCountries = [];
        this.state.countries.map((country) => {
            if (country.name.toLowerCase().indexOf(searchedText.toLowerCase()) !== -1) {
                filteredCountries.push(country)
            }
        })
        return (filteredCountries);
    }
    onChangeSearchText = (event) => {
        {
            (event.target.value.length > 0) && this.setState({ searchText: event.target.value })
        };
    }
    onChangeSelectedRegion = (region) => {
        this.setState({ selectedRegion: region });
    }
    navigateToCountryDetailsPage = (cardDetails) => {
        const { history } = this.props
        history.push({ pathname: `country-dashboard-app/:${cardDetails.alpha3Code}` })
    }
    showLoading = () => {
        return (<div className="loader-div" ><img className="loader-icon" src={loaderIcon}/>.</div>)
    }
    render() {
        return (
            <div>
            <Header onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme} />
            <CountriesFilterBar searchText={this.props.searchText} regionOptions={this.getRegionOptions()} selectedRegion={this.props.selectedRegion} selectedTheme={this.props.selectedTheme} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText} />
            {this.state.countries.length===0 && this.showLoading()}
            <div className="countries-container"><Countries countries={this.displayCountries()} selectedTheme={this.props.selectedTheme} navigateToCountryDetailsPage={this.navigateToCountryDetailsPage}/></div>
            </div>
        )
    }
}
export default withRouter(CountriesDashboardApp)
