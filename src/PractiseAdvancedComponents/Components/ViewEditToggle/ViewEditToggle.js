import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    UserInput,
    TextDiv,
    SubmitBtn,
    ToggleHeading,
    SubContainer,
    ComponentContainer,

}
from '../../styledComponents'


@observer
class ViewEditToggle extends React.Component {
    @observable enteredValue
    constructor(props) {
        super(props)
        this.enteredValue = 'Click on the edit button to start editing'
    }
    @action.bound
    onChange(event) {
        this.enteredValue = event.target.value;
    }
    @action.bound
    onChangeEnteredText(event) {
        this.enteredValue = event.target.value;
    }
    @action
    componentToDisplay() {
        let { toggleStatus, enteredValue, onToggle } = this.props;
        if (toggleStatus)
            return <UserInput 
            value={this.enteredValue} 
            onChange={this.onChangeEnteredText}
            />
        else
            return <TextDiv>
            {this.enteredValue}
            </TextDiv>
    }
    render() {
        let { onToggle, toggleStatus } = this.props
        let btnText = toggleStatus ? ("edit") : ("cancel")
        return (
            <ComponentContainer>
            <ToggleHeading>ViewEditToggle</ToggleHeading>
            <SubContainer>
             {this.componentToDisplay()}
            <SubmitBtn onClick={onToggle}>{btnText}</SubmitBtn>
            </SubContainer>
           
            </ComponentContainer>
        )
    }

}
export { ViewEditToggle }
