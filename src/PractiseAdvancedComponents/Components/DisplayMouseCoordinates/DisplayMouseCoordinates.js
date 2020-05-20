import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    ToggleHeading,
    ComponentContainer,

}
from '../../styledComponents'
class DisplayMouseCoordinates extends React.Component {
    render() {
        let { x, y } = this.props;
        return (
            <ComponentContainer>
            <ToggleHeading> DisplayMouseCoordinates  </ToggleHeading> 
            <div> the mouse position: { x }, { y } </div>
            </ComponentContainer>
        );
    }
}
export { DisplayMouseCoordinates }
