import React from 'react'
import searchIcon from './../../covidApp/react/countryListAssets/Search-icon.svg'
class SearchCountry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search-bar-sub-div" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}>
            <img className="search-image" src={searchIcon}  />
            <input  className="search-field" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}  placeholder="where in the world..." type="text" name="" onChange={this.props.onChangeSearchText}  />
            </div>
        )
    }
}
export default SearchCountry
