import React from 'react'
import { observable, action, computed } from 'mobx';

import CellModel from '../models/CellModel/CellModel'
class GridStore {
    @observable level = 0;
    @observable topLevel = 0;
    @observable currentLevelGrids = [];
    @observable selectedCellsCount = 0;
    @observable isGameCompleted = false;
    @action.bound
    onCellClick(cellId) { {}
    }
    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.level = 0;
        let noOfCellsToDisplay = 9;
        while (noOfCellsToDisplay > 0) {
            this.currentLevelGrids.push(new CellModel({ id: Math.random(), isHidden: true }))
            noOfCellsToDisplay--;
        }
        return (this.currentLevelGrids)
    }
    @action.bound
    onCellClick(cellId) {

    }
    @action.bound
    setGridCells() {

    }
    @action.bound
    goToNextLevelAndUpdateCells() {

    }
    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0;
    }
    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount++;
    }
    @action.bound
    onPlayAgainClick() {

    }
    @action.bound
    resetGame() {

    }
    @action.bound
    setTopLevel() {

    }


}
const gridStore = new GridStore();
export default gridStore;
