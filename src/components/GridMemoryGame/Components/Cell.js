import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { CellDiv, GameDiv } from '../StyledComponents/StyledComponents.js'

@observer
class Cell extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <CellDiv></CellDiv>)
    }
}
export default Cell;
