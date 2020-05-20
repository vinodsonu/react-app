import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    SubmitBtn,
    TextDiv,
    ToggleHeading,

}
from '../../styledComponents'

@observer
class CollapseExpand extends React.Component {
    @observable list
    @observable listTitle
    @action.bound
    listToDisplay() {
        let { toggleStatus, list } = this.props
        console.log(123, list)
        if (toggleStatus)
            return list.map((item) => <TextDiv key={item}>{item}</TextDiv>)
        else
            return <TextDiv></TextDiv>
    }
    render() {

        let { list, listTitle, onToggle, toggleStatus } = this.props
        let btnText = toggleStatus ? (" expand") : ("collapse")
        return (
            <React.Fragment>
            <ToggleHeading>CollapseExpand</ToggleHeading>
            <SubmitBtn onClick={onToggle}>{btnText}</SubmitBtn>
            {this.listToDisplay()}
            </React.Fragment>
        )
    }
}
export { CollapseExpand }
