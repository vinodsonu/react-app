import React from 'react'
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { GameDiv } from '../StyledComponents/StyledComponents.js'
import Cell from './Cell.js'
@inject("gridStore", "gameDivWidth")
@observer
class GameField extends React.Component {
    render() {
        this.props.gridStore.setGridCells();
        this.props.gridStore.setTimeInterval();
        return (
            <GameDiv width={this.props.gameDivWidth}>
        {this.props.gridStore.currentLevelGrids.map((eachGrid) => {
            return (<Cell  level={this.props.gridStore.level} key={eachGrid.id} cell={eachGrid}/>)
        })}
        </GameDiv>
        )
    }
}
export default GameField;
