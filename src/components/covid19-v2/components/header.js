import React from "react"
import modeicon from './../../covidApp/react/countryListAssets/light-mode-icon.svg'
class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    onChangeTheme = (themeId) => {
        let color1 = this.props.selectedTheme.name;
        this.props.onChangeTheme(themeId);
    }
    render() {
        return (<div className="header" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}} ><span>where in the world!</span>
                        <button className="theme-mode-btn" style={{backgroundColor:this.props.selectedTheme.name,color:(this.props.selectedTheme.id==='0')?"#2b3945":"#fff"}} onClick={()=>this.onChangeTheme(this.props.selectedTheme.id)}><img src={modeicon} />{(this.props.selectedTheme.id==='0')?'light':'dark'}-mode</button>
        
            </div>)
    }
}
export default Header;
