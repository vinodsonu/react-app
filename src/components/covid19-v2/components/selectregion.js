import React from 'react'
class SelectRegion extends React.Component {
    constructor(props) {
        super(props);
    }
    onChangeSelectedRegion = (event) => {
        this.props.onChangeSelectedRegion(event.target.value);
    }
    render() {
        let regionsList = this.props.regionOptions;
        return (
            <select className="country-dropdown" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}} onChange={this.onChangeSelectedRegion}>
            <option value="All"  selected>All</option>
            {regionsList.map((region)=>{
                return <option  value={region}>{region}</option>
            })}
</select>
        )
    }
}
export default SelectRegion;
