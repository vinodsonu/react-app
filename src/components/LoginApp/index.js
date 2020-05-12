import React from 'react';
import { observer } from 'mobx-react';
import { observable, action, computed, reaction, autorun } from 'mobx';
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants';

import HomePage from '../HomePage/index'

class Ticker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 20 }
    }
    onIncrement = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
        this.setState(prevState => ({ count: prevState.count + 1 }))
        this.setState({ count: count + 1 })
        this.setState({ count: count + 10 })
        this.setState({ count: count + 100 })
        console.log(count)
    }
    render() {
        const { count } = this.state
        return (<div>
        <p>{count}</p>
        <button onClick={this.onIncrement}>Increment</button>
        </div>)
    }
}

export default Ticker
