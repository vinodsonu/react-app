/*global covid19*/
/*global fetch*/
import React from "react"
import { withRouter } from "react-router-dom";
import tw from 'tailwind.macro';
import Header from './../components/header.js'
import modeicon from './../../covidApp/react/countryListAssets/light-mode-icon.svg'
import './index.css'
import { Animated } from "react-animated-css";
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Button, BorderHeadingDiv, SubHeading, MainHeading, CountryDetailsDiv, CountryDetailsSubChord, DetailsSubcord, ImgDiv } from './../styledcomponents.js'
class CountryDetails extends React.Component {
    constructor(props) {
        super(props)
        const { match } = this.props;
        this.countryAlpha3Code = match.params.countryId.slice(1);
        this.state = {
            graphData: [],
            country: '',
        }
    }
    componentDidMount() {
        this.getCountryData();
        this.getGraphData();
    }
    getGraphData = () => {
        const data = covid19.data().filter(x => x.country_iso3 === this.countryAlpha3Code).groupByDate();
        this.setState({ graphData: data });
    }
    getCountryData = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => { return resp.json() })
            .then((data) => {
                data.map((country) => {
                    {
                        if (country.alpha3Code === this.countryAlpha3Code)
                            this.setState({ country: country })
                    }
                })
            })
    }
    navigateBack = () => {
        const { history } = this.props;
        history.push({ pathname: `/country-dashboard-app` })
    }
    navigateToCountryDetailsPage = (event) => {
        const { history } = this.props;
        history.push({ pathname: `:${event.target.value}` })
        this.countryAlpha3Code = event.target.value;
        this.getCountryData();
        this.getGraphData();
    }
    render() {
        return (
            <div style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}  >
            <Header onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme} />
            <div style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}><Button style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}} onClick={this.navigateBack}>back</Button></div>
            <MainHeading>{this.state.country.name}</MainHeading >
            <Animated animationIn="zoomInUp"  isVisible={true}>
            <CountryDetailsDiv  style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}>
            <ImgDiv><img className="cord-img-dimensions"  src={this.state.country.flag}/></ImgDiv>
                    <CountryDetailsSubChord>
                    <DetailsSubcord><b>population:</b> {this.state.country.population}</DetailsSubcord>
                <DetailsSubcord><b>Region:</b> {this.state.country.region}</DetailsSubcord>
                <DetailsSubcord><b>nativeName:</b> {this.state.country.nativeName}</DetailsSubcord>
                <DetailsSubcord><b>timezones:</b>{this.state.country.timezones}</DetailsSubcord>
                </CountryDetailsSubChord>
            <CountryDetailsSubChord>
                    <DetailsSubcord><b>topleveldomain:</b> {this.state.country.topLevelDomain}</DetailsSubcord>
        <DetailsSubcord><b>sub-region:</b> {this.state.country.subregion}</DetailsSubcord>
        <DetailsSubcord><b>capital:</b> {this.state.country.capital}</DetailsSubcord>
        <DetailsSubcord><b>latlng:</b>{this.state.country.latlng}</DetailsSubcord>
                    </CountryDetailsSubChord>
                <BorderHeadingDiv><SubHeading>{this.state.country.name} border countries</SubHeading></BorderHeadingDiv>
            <div className="border-countries-div">
                    {(this.state.country.borders != undefined) && 
                        this.state.country.borders.map((borderCountry)=>{
                            return <Button style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}   value={borderCountry} onClick={this.navigateToCountryDetailsPage}>{borderCountry}</Button>
                        })
                    }
                    </div>
            
            </CountryDetailsDiv>
            </Animated>
                    <div>
                <LineChart width={500} height={300} data={this.state.graphData}
            margin={{top: 5, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
      </LineChart>
            </div>
            </div>

        );
    }
}
export default withRouter(CountryDetails);
