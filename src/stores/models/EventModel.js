import React from 'react'
import { observable, action } from 'mobx';
import eventStore from './../EventsStore/EventStore.js'
class EventModel {
    @observable id;
    @observable name;
    @observable location;
    constructor(event) {
        this.id = event.id;
        this.name = event.name;
        this.location = event.location;
    }
}
export default EventModel;
