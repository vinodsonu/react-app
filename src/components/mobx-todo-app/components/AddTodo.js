import React from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

import TodoModel from './../../../stores/models/TodoModel/index'
import todoStore from './../../../stores/TodoStore/index'

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
        todoStore.onAddTodo(userInput, id, isCompleted)
    }
    render() {
        return (<div className="todoApp">
        <div  onSubmit={this.onAddTodo}>
        <div className="heading">todo</div>
        <div className="default-row" >
          <input  className="todo-item"  placeholder="Next Todo" type="text" name="" onKeyDown={this.onKeyDown}/>
          <TodoList/>
        </div>
        </div>
      </div>)
    }
}
export default AddTodo;
