import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx';

import { AddEventDiv, Button } from './../componentStyles.js'

import eventStore from './../../../stores/EventsStore/EventStore.js'
import EventModel from './../../../stores/models/EventModel.js'
import EventsList from './EventsList.js'
@observer
class AddEvent extends React.Component {
    @observable name;
    @observable location;
    @action.bound
    onAddEvent = (event) => {
        event.preventDefault();
        eventStore.onAddEvent(this.name, this.location);
        this.name = "";
        this.location = "";
    }
    @action.bound
    onChangeName(event) {
        this.name = event.target.value;
    }
    @action.bound
    onChangeLocation(event) {
        this.location = event.target.value;
    }
    render() {
        return (<div>
        <AddEventDiv>
        <form onSubmit={this.onAddEvent}>
        <input type="text" name="name" placeholder="eventsname" onChange={this.onChangeName} value={this.name}/>
        <input type="text" name="name" placeholder="eventslocation" onChange={this.onChangeLocation} value={this.location}/>
        <input type="Submit" value= "AddEvent" />
        </form>
        </AddEventDiv>
        <EventsList/>
        </div>)
    }
}
export default AddEvent;
