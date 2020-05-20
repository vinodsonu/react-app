import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import { withToggle } from '../../hocs/withToggle/withToggle.js'
import { withScreenSizeDetectors } from '../../hocs/withScreenSizeDetectors/withScreenSizeDetectors.js'
import { ViewEditToggle } from '../../../PractiseAdvancedComponents/Components/ViewEditToggle'
import { CollapseExpand } from '../../../PractiseAdvancedComponents/Components/CollapseExpand'
import { ScreenDetectors } from '../../../PractiseAdvancedComponents/Components/ScreenDetectors'
import { MouseCoordinates } from '../../../PractiseAdvancedComponents/Components/MouseCoordinates'
import { DisplayMouseCoordinates } from '../../../PractiseAdvancedComponents/Components/DisplayMouseCoordinates'

import {
    MainContainer,
    MainHeading,
}
from '../../../PractiseAdvancedComponents/styledComponents'

const EnhancedViewEditToggle = withToggle(ViewEditToggle)
const EnhancedCollapseExpand = withToggle(CollapseExpand)
const EnhancedScreenDetectors = withScreenSizeDetectors(ScreenDetectors)

class PracticeAdvancedConceptsRoute extends React.Component {
    render() {
        return (
            <MainContainer>
            <MainHeading>HOC's Usage</MainHeading>
            <EnhancedViewEditToggle/>
            <EnhancedCollapseExpand list={['apple','banana','mango']} listTitle={'Sample Shopping List:'}/>
            <EnhancedScreenDetectors/>
            <MainHeading>Render Props Usage</MainHeading>
             <MouseCoordinates render={
                 (x,y)=>(<DisplayMouseCoordinates x={x} y={y}/>)
             }/>
            </MainContainer>
        )
    }
}

export { PracticeAdvancedConceptsRoute }
