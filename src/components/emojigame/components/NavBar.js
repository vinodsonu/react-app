import React from "react"
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { NavBarDiv, NavBarHeadingDiv, ScoreTextDiv, Button } from './../styledComponents.js'
class NavBar extends React.Component {
    constructor() {
        super();
    }
    onChangeTheme = (themeId) => {
        this.props.onChangeTheme(themeId);
    }
    render() {
        return (
            <NavBarDiv  selectedTheme={this.props.selectedTheme}>
        <NavBarHeadingDiv >Emoji Game</NavBarHeadingDiv>
        <ScoreTextDiv>
        <p>Score:{this.props.score}</p>
        <p>Top Score:{this.props.topScore}</p>
        <Button selectedTheme={this.props.selectedTheme} onClick={()=>this.onChangeTheme(this.props.selectedTheme.id)}>{this.props.selectedTheme.id==="0"?"LIGHT THEME":"DARK THEME"}</Button>
        </ScoreTextDiv>
        </NavBarDiv>)
    }
}
export default NavBar;
