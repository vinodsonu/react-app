import React from 'react'
import { observable, action } from 'mobx';

import EventModel,{EventObjectModel} from './../models/EventModel'

class EventStore {
    id:number=0
    @observable name:string=''
    @observable location:string=''
    @observable events:Array<EventModel> = [];
    @action.bound
    onAddEvent(id:number,name:string,location:string){
        const eventObjectModel:EventObjectModel={
            id,
            name,
            location,
        }
        const eventModel=new EventModel(eventObjectModel);
        this.events.push(eventModel);

    }
}
const eventStore = new EventStore();
export default eventStore;
