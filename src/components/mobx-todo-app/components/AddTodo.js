import React from 'react';
import { observable, action } from 'mobx'
import { observer } from 'mobx-react';

import './../index.css'
import TodoList from './TodoList.js'
import todoStore from './../../../stores/TodoStore/index.js'
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
        todoStore.onAddTodo(userInput);
    }
    render() {
        return (<div className="todoApp">
        <div  onSubmit={this.onSubmit}>
        <div className="heading">todo</div>
        <div className="default-row" >
          <input  className="todo-item"  placeholder="Next Todo" type="text" name="" onKeyDown={this.onKeyDown}/>
          <TodoList userInput={this.userInput}/>
        </div>
        </div>
      </div>)
    }
}
export default AddTodo;
