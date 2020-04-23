import React from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

import NoDataView from '../../common/NoDataView'
import TodoModel from './../../../stores/models/TodoModel/index'


import './../index'
import TodoList from './TodoList'

@observer
class AddTodo extends React.Component {
    @observable userInput = '';
    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onAddTodo(event.target.value);
            event.target.value = "";
        }
    }
    @action.bound
    onAddTodo(userInput) {
        let id = Math.random();
        let isCompleted = false;
        this.props.todoStore.todos.push(new TodoModel({ userInput: userInput, isChecked: isCompleted, id: id }))
    }
    render() {
        return (<div className="todoApp">
        <div  onSubmit={this.onAddTodo}>
        <div className="heading">todo</div>
        <div className="default-row" >
          <input  className="todo-item"  placeholder="Next Todo" type="text" name="" onKeyDown={this.onKeyDown}/>
        </div>
        <div className="appended-rows">
        {this.props.todoStore.todos.length===0?(<NoDataView/>):(null)}
        <TodoList todoStore={this.props.todoStore}/>
        </div>
        </div>
      </div>)
    }
}
export default AddTodo;
