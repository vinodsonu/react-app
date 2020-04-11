import React from 'react'
import { observable, action } from 'mobx';
import EventModel from './../models/EventModel.js'
class EventStore {
    @observable name;
    @observable location;
    @observable events = [];
    @action.bound
    onAddEvent(name, location) {
        console.log(name, location)
        this.events.push(new EventModel({ id: Math.random(), name: name, location: location }))
        console.log(new EventModel({ id: Math.random(), name: name, location: location }))

    }
}
const eventStore = new EventStore();
export default eventStore;
