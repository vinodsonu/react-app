import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx';
import eventStore from './../../../stores/EventsStore/EventStore.js'
import Event from './Events.js'
@observer
class EventsList extends React.Component {
    render() {
        alert(eventStore.events.length);
        return (eventStore.events.map((eventModel) => {
            return <Event eventModel={eventModel}/>
        }))
    }
}
export default EventsList;
