import React from 'react'
import CountryCard from './countrycard.js'
class Countries extends React.Component {
    constructor(props) {
        super(props);
    }
    noNoDataFound = () => {
        if (this.props.countries.length === 0) {
            return (<div className="no-result-div">no data found</div>);
        }
    }
    render() {
        return (<div className="countries-container" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}} >
            {this.noNoDataFound()}
        {this.props.countries.map((country) => {
                return <CountryCard data={country} navigateToCountryDetailsPage={this.props.navigateToCountryDetailsPage}/>;
            })}
        </div>)
    }
}
export default Countries;
