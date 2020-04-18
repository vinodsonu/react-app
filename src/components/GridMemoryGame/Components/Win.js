import React from 'react'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { PlayAgainButton, ResultContainer, ResultSubDiv, ResultLevelDiv } from '../StyledComponents/StyledComponents.js'

@inject("gridStore")
@observer
class Win extends React.Component {
    onPlayAgainClick = () => {
        this.props.gridStore.onPlayAgainClick();
    }
    render() {
        return (
            <ResultContainer>
        <ResultLevelDiv>{this.props.gridStore.topLevel}</ResultLevelDiv>
        <ResultSubDiv>Congratulations! You completed all the levels</ResultSubDiv>
        <PlayAgainButton selectedTheme={this.props.selectedTheme} onClick={this.onPlayAgainClick}>Play Again</PlayAgainButton>
        </ResultContainer>
        )
    }
}
export default Win;
