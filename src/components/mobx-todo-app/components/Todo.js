/*global React*/
import React from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';
import { Animated } from "react-animated-css";

import TodoModel from './../../../stores/models/TodoModel/index'
import todoStore from './../../../stores/TodoStore/index'
import './../index'

@observer
class Todo extends React.Component {
    onCompleteTodo = () => {
        this.props.todoModel.onCompleteTodo();
    }
    onChange = (event) => {
        this.props.todoModel.onChangeInput(event.target.value);
    }
    @action.bound
    onRemoveTodo() {
        this.props.todoStore.onRemoveTodo(this.props.todoModel.id)
    }
    render() {
        return (
            <Animated animationIn="slideInRight" isVisible={true}>
        <div className="appended-child">
        <input onChange={this.onCompleteTodo} defaultChecked={this.props.todoModel.isChecked} className="child-checkbox" type="checkbox" />
        <input type="text"  className={`child-text ${this.props.todoModel.isChecked?"disable":"enable"}`}
        value={this.props.todoModel.userInput} onChange={this.onChange}/>
        <button onClick={this.onRemoveTodo}className="child-del-btn">X</button>
        </div>
        </Animated>)
    }

}
export default Todo;
