import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import gridStore from '../../../stores/GridStore/GridStore.js'
import GameField from './GameField'

@observer
class GridMemoryGame extends React.Component {
    @observable cells = [];
    constructor() {
        super()
        this.cells = gridStore.goToInitialLevelAndUpdateCells();
    }
    render() {
        return (<GameField cells={this.cells}/>)
    }
}
export default GridMemoryGame;
