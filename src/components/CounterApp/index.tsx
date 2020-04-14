import React from "react"
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { observer } from 'mobx-react';

import { CounterContainer, Button, Input, Heading, CounterDiv } from './componentstyles'
import CounterStore from './../../stores/countStore/index'

@observer
class CounterApp extends React.Component {
    constructor() {
        super()
    }
    handleIncrement = () => {
        CounterStore.onIncrement()
    }
    handleDecrement = () => {
        CounterStore.onDecrement()
    }
    onChangeCount = (event) => {
        console.log(event.target.value);
        CounterStore.onChangeCount(event.target.value);
    }
    render() {
        return (<CounterContainer>
        <Heading>Counter</Heading>
        <CounterDiv>
        <Button onClick={this.handleIncrement}>+</Button>
        <Input type="number" value={CounterStore.count} onChange={this.onChangeCount}/>
        <Button onClick={this.handleDecrement}>-</Button>
        </CounterDiv>
        </CounterContainer>)
    }
}
export default CounterApp;
