import React from "react"


import {
    ResultContainer,
    ResultSubDiv,
    ResultScoreDiv,
    PlayAgainButton
}
from './../styledComponents.js'

let OnWin = (props) => <ResultContainer>
        <ResultScoreDiv>{props.score}</ResultScoreDiv>
        <ResultSubDiv isWin={props.isWin}>You Win!</ResultSubDiv>
        <PlayAgainButton selectedTheme={props.selectedTheme} onClick={props.onPlayAgainClick}>Play Again</PlayAgainButton>
        </ResultContainer>

let OnLose = (props) =>
    <ResultContainer>
        <ResultScoreDiv>{props.score}</ResultScoreDiv>
        <ResultSubDiv isWin={props.isWin}>You Lose!</ResultSubDiv>
        <PlayAgainButton selectedTheme={props.selectedTheme} onClick={props.onPlayAgainClick}>Play Again</PlayAgainButton>
        </ResultContainer>

class StateComponent extends React.Component {



    render() {
        let { isWin } = this.props;
        let ComponentToBedisplayed = isWin ?
            <OnWin
        score={this.props.score}
        isWin={this.props.isWin}
        selectedTheme={this.props.selectedTheme}
        onClick={this.props.onPlayAgainClick}
        /> :
            <OnLose
         score={this.props.score}
        isWin={this.props.isWin}
        selectedTheme={this.props.selectedTheme}
        onClick={this.props.onPlayAgainClick}
        />
        return (
            ComponentToBedisplayed
        )
    }
}
export { StateComponent, OnWin, OnLose }
