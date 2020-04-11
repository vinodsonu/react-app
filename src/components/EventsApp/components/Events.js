import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx';
@observer
class Event extends React.Component {
    constructor() {
        super();
    }
    render() {
        alert("event");
        return (<div>
        <div>{this.props.eventModel.name}</div>
        <div>{this.props.eventModel.location}</div>
        </div>)
    }
}
export default Event;
