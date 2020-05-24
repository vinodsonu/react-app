/*global localStorage*/
import React from 'react'
import { observable, action, autorun, toJS, computed, get, set } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';

import gridStore from '../../../stores/GridStore/GridStore.js'
import { MainDiv, Game } from '../StyledComponents/StyledComponents.js'
import GameField from './GameField'
import Header from './Header'
import Win from './Win'
import AttemptsGraph from './AttemptsGraph'

import data from './data.json'

const gameFieldWidth = data[0]["gridWidth"];
@observer
class GridMemoryGame extends React.Component {
    @observable cells = [];
    constructor() {
        super()
        gridStore.goToInitialLevelAndUpdateCells();
    }
    componentDidMount() {
        let currentLevel = localStorage.getItem('level')
        let currentTopLevel = localStorage.getItem('topLevel')
        if (currentLevel) {
            gridStore.level = JSON.parse(localStorage.getItem('level'))
            gridStore.topLevel = JSON.parse(localStorage.getItem('topLevel'))

        }
    }
    componentDidUpdate() {
        localStorage.setItem('level', JSON.stringify(gridStore.level))
        localStorage.setItem('topLevel', JSON.stringify(gridStore.topLevel))
    }
    middleComponentToDisplay = () => {
        if (gridStore.isGameCompleted === true)
            return (<Win/>)
        else
            return (<GameField/>)
    }
    GraphComponentToDisplay = () => {
        return (<AttemptsGraph key={Math.random()} gameData={gridStore.gameData}/>)
    }
    render() {
        return (<Provider gridStore={gridStore} gameDivWidth={gameFieldWidth}>
         <Header  selectedTheme = {this.props.selectedTheme } onChangeTheme = { this.props.onChangeTheme }/>
            <Game selectedTheme = {this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} >
                <MainDiv>
                    {this.middleComponentToDisplay()}
                </MainDiv>
                {this.GraphComponentToDisplay()}
            </Game>
        </Provider>)
    }
}
export default GridMemoryGame;
