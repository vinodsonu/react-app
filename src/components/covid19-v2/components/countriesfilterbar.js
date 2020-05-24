import React from 'react'
import SearchCountry from './searchcountry.js';
import SelectRegion from './selectregion.js';
class CountriesFilterBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search-bar-div" 
            style={{backgroundColor:this.props.selectedTheme.name,
            color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}}>
            <SearchCountry  
            onChangeSearchText={this.props.onChangeSearchText} 
            searchText={this.props.searchText}
            selectedTheme={this.props.selectedTheme}/>
            <SelectRegion   
            onChangeSelectedRegion={this.props.onChangeSelectedRegion} 
            regionOptions={this.props.regionOptions}
            selectedRegion={this.props.selectedRegion} 
            selectedTheme={this.props.selectedTheme} />
            </div>
        )
    }

}
export default CountriesFilterBar;
