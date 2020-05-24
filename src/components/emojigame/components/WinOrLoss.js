import React from "react"
import { withRouter } from "react-router";

import { StateComponent } from './StateComponent'

class WinOrLoss extends React.Component {
    onPlayAgainClick = () => {
        this.props.onPlayAgainClick();
    }

    render() {
        return (<React.Fragment>
       <StateComponent  onPlayAgainClick={this.onPlayAgainClick} 
        score={this.props.score} selectedTheme={this.props.selectedTheme} 
        isWin={(this.props.gameState==='WON')?(true):(false)}/>
        </React.Fragment>)
    }
}
export default withRouter(WinOrLoss);
