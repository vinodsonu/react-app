import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    TextDiv,
    ToggleHeading,
}
from '../../styledComponents'

@observer
class ScreenDetectors extends React.Component {
    constructor(props) {
        super(props)
    }
    @action.bound
    deviceType() {
        let { isMobileFn, isTabletFn, isDesktopFn } = this.props
        if (isMobileFn)
            return "Mobile"
        else if (isTabletFn)
            return "Tablet"
        else
            return "Desktop"
    }
    render() {
        return (
            <React.Fragment>
            <ToggleHeading>ScreenDetectors</ToggleHeading>
            <TextDiv>displayType</TextDiv>
            <TextDiv>{this.deviceType()}</TextDiv>
            </React.Fragment>
        )
    }
}
export { ScreenDetectors }
