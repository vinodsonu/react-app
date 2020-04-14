import React from 'react'
import { observable } from 'mobx';
import { observer } from 'mobx-react'
import EventModel from './../../../stores/models/EventModel'

type EventProps={
    eventModel:EventModel;
}

@observer
class Event extends React.Component<EventProps> {
    @observable name:string='';
    @observable location:string='';
    constructor(props: EventProps) {
        super(props);
        const {eventModel}=props
        const {name,location}=eventModel
        
    }
    render() {
        return (<div>
        <div>{name}</div>
        <div>{location}</div>
        </div>)
    }
}
export default Event
