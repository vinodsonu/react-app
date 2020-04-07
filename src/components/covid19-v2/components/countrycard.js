import React from "react"
import { withRouter } from "react-router";
import './countrycard.css';
class CountryCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isImageZoomed: false }

    }
    zoomInImage = (event) => {
        this.setState({ isImageZoomed: true })
    }
    navigateToCountryDetailsPage = () => {
        this.props.navigateToCountryDetailsPage(this.props.data)
    }
    render() {
        return (
            <div  className={`country-div ${(this.state.isImageZoomed===true)?('zoom'):('')}`}   onClick={this.navigateToCountryDetailsPage}  id={this.props.data.alpha3Code}>
            <div className="img-container">{<img className="img-dimensions" src={this.props.data.flag}/>
            }</div>
                <div className="country-div-item"><b>{this.props.data.name}</b></div>
                <div className="country-div-item">population:{this.props.data.population}</div>
                <div className="country-div-item">Region:{this.props.data.region}</div>
                <div className="country-div-item">Capital:{this.props.data.capital}</div>
                </div>
        )
    }
}
export default withRouter(CountryCard);
