import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx';

import eventStore from './../../../stores/EventsStore/EventStore'
import EventModel from './../../../stores/models/EventModel'
import EventsList from './EventsList'
import { AddEventDiv, Button } from './../componentStyles'

type AddEventProps={
    onAddEvent:(id:number,name:string,location:string)=>void
}

@observer
class AddEvent extends React.Component<AddEventProps> {
    @observable id=Math.random()
    @observable name
    @observable location
    @action.bound
    onAddEvent = (event) => {
        event.preventDefault();
        eventStore.onAddEvent(this.id,this.name,this.location);
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
