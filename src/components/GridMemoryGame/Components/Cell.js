import React from 'react'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Animated } from "react-animated-css";


import { CellDiv, GameDiv } from '../StyledComponents/StyledComponents.js'

@inject("gridStore", "gameDivWidth")
@observer
class Cell extends React.Component {
    @observable isCellHidden = this.props.cell.isHidden;
    @observable timer = 0;
    @observable shouldShowHiddenCells = true;
    @observable isClickedOnCell = false;
    componentDidMount() {
        setTimeout(() => (this.shouldShowHiddenCells = false), (this.props.level + 3) * 1000);
    }
    onCellClick = (event) => {
        this.isClickedOnCell = true;
        this.props.gridStore.onCellClick(event.target.id);

    }
    render() {
        let gridWidth = (this.props.gameDivWidth) / (this.props.level + 4);

        return (
            <Animated key={Math.random()} animationIn={`${this.isCellHidden && this.isClickedOnCell?"zoomIn":"rubberBand"}`} isVisible={true}>
            <CellDiv id={this.props.cell.id} disabled={this.shouldShowHiddenCells} onClick={this.onCellClick} dimensions={gridWidth} 
            shouldShowHiddenCells={this.shouldShowHiddenCells} 
            isClickedOnCell={this.isClickedOnCell}
            isHidden={this.props.cell.isHidden}
            ></CellDiv> 
            </Animated>
        )
    }
}
export default Cell;
