import React from 'react'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { HeaderDiv, HeaderPara, HeaderSubDiv, LevelPara, HeaderButton } from '../StyledComponents/StyledComponents.js'

@inject("gridStore", "gameDivWidth")
@observer
class Header extends React.Component {
    render() {
        return (<HeaderDiv width={this.props.gameDivWidth} selectedTheme={this.props.selectedTheme}>
        <HeaderPara>Top Level:{this.props.gridStore.topLevel}</HeaderPara>
        <HeaderSubDiv>
        <LevelPara>Level:{this.props.gridStore.level}</LevelPara>
        <HeaderButton selectedTheme={this.props.selectedTheme} 
        onClick={this.props.onChangeTheme}>{this.props.selectedTheme.modeName}</HeaderButton>
        </HeaderSubDiv>
        </HeaderDiv>)
    }
}
export default Header
