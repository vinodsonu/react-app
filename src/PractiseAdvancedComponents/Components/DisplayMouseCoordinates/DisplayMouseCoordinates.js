import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    ToggleHeading,

}
from '../../styledComponents'
class DisplayMouseCoordinates extends React.Component {
    render() {
        let { x, y } = this.props;
        return (
            <React.Fragment>
            <ToggleHeading> DisplayMouseCoordinates  </ToggleHeading> 
            <div> the mouse position: { x }, { y } </div>
            </React.Fragment>
        );
    }
}
export { DisplayMouseCoordinates }
