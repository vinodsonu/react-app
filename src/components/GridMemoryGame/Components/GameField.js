import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { GameDiv } from '../StyledComponents/StyledComponents.js'
import Cell from './Cell.js'

@observer
class GameField extends React.Component {
    @observable cells = [];
    @observable level = 0;
    render() {
        return (<GameDiv>
        {this.props.cells.map((eachCell) => {
            return (<Cell key={eachCell.id} cell={eachCell}/>)
        })}
        </GameDiv>)
    }
}
export default GameField;
