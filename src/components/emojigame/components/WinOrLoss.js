import React from "react"
import { withRouter } from "react-router";
import { ResultContainer, ResultSubDiv, ResultScoreDiv, PlayAgainButton } from './../styledComponents.js'
class WinOrLoss extends React.Component {
    constructor() {
        super();
    }
    onPlayAgainClick = () => {
        this.props.onPlayAgainClick();
    }
    render() {
        alert(this.props.isWin);
        return (<ResultContainer>
        <ResultScoreDiv>{this.props.score}</ResultScoreDiv>
        <ResultSubDiv isWin={this.props.isWin}>{(this.props.isWin)?("You Win!"):("You Lose!")}</ResultSubDiv>
        <PlayAgainButton selectedTheme={this.props.selectedTheme} onClick={this.props.onPlayAgainClick}>Play Again</PlayAgainButton>
        </ResultContainer>)
    }
}
export default withRouter(WinOrLoss);
