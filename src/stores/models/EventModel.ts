import React from 'react'
import { observable, action } from 'mobx';

import eventStore from './../EventsStore/EventStore';

export type EventObjectModel={
    id:number,
    name:string,
    location:string,
}

class EventModel{
    id:number=0;
    @observable name:string="";
    @observable location:string="";
    constructor(event:EventObjectModel){
        this.id=event.id;
        this.name=event.name;
        this.location=event.location;
    }
}
export default EventModel;

