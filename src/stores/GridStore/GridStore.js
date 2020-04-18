import React from 'react'
import { observable, action, computed, reaction } from 'mobx';

import CellModel from '../models/CellModel/CellModel'

class GridStore {
    @observable noOfAttempts = 0;
    @observable gameData = [];
    @observable timerId;
    @observable level = 0;
    @observable topLevel = 0;
    @observable currentLevelGrids = [];
    @observable selectedCellsCount = 0;
    @observable isGameCompleted = false;
    @observable isGameWon = false;
    @observable lastAttemptedLevel = 0;
    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.lastAttemptedLevel = this.level;
        this.noOfAttempts++;
        this.level = 0;
        let noOfGridsToDisplay = 9;
        let currentGrids = [];
        clearTimeout(this.timerId);
        while (noOfGridsToDisplay > 0) {
            currentGrids.push(new CellModel({ id: Math.random(), isHidden: false }))
            noOfGridsToDisplay--;
        }
        this.currentLevelGrids = currentGrids;

    }
    @action.bound
    onCellClick(cellId) {
        let clickedGrid = [];
        clickedGrid = this.currentLevelGrids.find((eachGrid) => (eachGrid.id == cellId))
        if (clickedGrid.isHidden === true)
            this.incrementSelectedCellsCount();
        else {
            this.setTopLevel();
            this.onChangeGameData;
            setTimeout(() => this.goToInitialLevelAndUpdateCells(), 500)
            this.resetSelectedCellsCount();
        }
        if (this.selectedCellsCount === this.level + 3) {
            if (this.level != 3) {
                setTimeout(() => this.goToNextLevelAndUpdateCells(), 500)
                this.resetSelectedCellsCount();
            }
            else {
                this.setTopLevel();
                this.isGameCompleted = true;
            }

        }
    }
    @action.bound
    setGridCells() {
        const shuffled = this.currentLevelGrids.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, this.level + 3);
        selected.forEach((grid) => {
            grid.isHidden = true;
        })

    }
    @action.bound
    goToNextLevelAndUpdateCells() {
        const currentLevel = this.level + 1;
        clearTimeout(this.timerId);
        let currentGrids = [];
        let noOfGridsToDisplay = (currentLevel + 3) * (currentLevel + 3);
        while (noOfGridsToDisplay > 0) {
            currentGrids.push(new CellModel({ id: Math.random(), isHidden: false }))
            noOfGridsToDisplay--;
        }
        this.currentLevelGrids = currentGrids;
        this.level++;

    }
    @action.bound
    setTimeInterval() {
        this.timerId = setTimeout(this.goToInitialLevelAndUpdateCells, (this.level + 9) * 1000);
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
        this.resetSelectedCellsCount();
        this.goToInitialLevelAndUpdateCells();
        this.isGameCompleted = false;
    }
    @action.bound
    setTopLevel() {
        if (this.level > this.topLevel)
            this.topLevel = this.level;
    }

    onChangeGameData = reaction(() => (this.noOfAttempts),
        (noOfAttempts) => { this.gameData.push({ Attempt: this.noOfAttempts + 1, level: this.lastAttemptedLevel }) })
}
const gridStore = new GridStore();
export default gridStore;
