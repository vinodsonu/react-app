/*global React*/
import React from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

import TodoModel from './../../../stores/models/TodoModel/index'
import todoStore from './../../../stores/TodoStore/index'
import './../index'

@observer
class Todo extends React.Component{
    
    @action.bound
    onCompleteTodo = (event) => {
        this.props.todoModel.onCompleteTodo(event);
    }
    @action.bound
    onChange = (event) => {
        this.props.todoModel.onChangeInput(event.target.value);
    }
    @action.bound
    onRemoveTodo() {
        todoStore.onRemoveTodo(this.props.todoModel.id)
    }
    render() {
        return (<div className="appended-child">
        <input onChange={this.onCompleteTodo} defaultChecked={this.props.todoModel.isChecked} className="child-checkbox" type="checkbox" />
        <input type="text"  className="child-text" value={this.props.todoModel.userInput} onChange={this.onChange}/>
        <button onClick={this.onRemoveTodo}className="child-del-btn">X</button>
        </div>)
    }

}
export default Todo;
