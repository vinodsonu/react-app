import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    TextDiv,
    ToggleHeading,
    ComponentContainer,
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
            <ComponentContainer>
            <ToggleHeading>ScreenDetectors</ToggleHeading>
            <TextDiv>displayType</TextDiv>
            <TextDiv>{this.deviceType()}</TextDiv>
            </ComponentContainer>
        )
    }
}
export { ScreenDetectors }
