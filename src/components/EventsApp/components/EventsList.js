import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx';

import eventStore from './../../../stores/EventsStore/EventStore'
import Event from './Events'


@observer
class EventsList extends React.Component {
    @action
    getEventStore() {
        return eventStore;
    }
    renderListOfStudents = () => {
        return (this.getEventStore().events.map((eventModel) => {
            return <Event  eventModel={eventModel}/>
        }))
    }
    render() {
        return (<div>{this.renderListOfStudents()}</div>)
    }
}
export default EventsList;
