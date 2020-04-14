import React from 'react'
import { observer, Provider, inject } from 'mobx-react'
import { observable, action } from 'mobx';

export type  EventAppProps={
    value?:string,
    temp?:string,
    name?:string,
}
@observer
class A extends React.Component<EventAppProps>{
    @observable value = 'x';
    render() {
        return (<Provider temp={this.value}>
        <B/>
        </Provider>)
    }
}
@inject('temp')
@observer
class B extends React.Component {
    @observable name:string = "";
    @action.bound
    onChange(event) {
        this.name = event.target.value;
    }
    render() {
        return (
            <div>
            <input style={{backgroundColor:"yellow"}} value={this.name} onChange={this.onChange}/>
            <C name={this.name}/>
            </div>
        )
    }
}
@inject('temp')
class C extends React.Component<EventAppProps> {
    render() {
        const { name } = this.props;
        return (<div>{name}</div>)
    }
}
export default A;
