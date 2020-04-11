/*global React*/
import React from 'react';
import { observable, action, computed, reaction } from 'mobx';
import { observer } from 'mobx-react';

import './../index.css';
import todoStore from './../../../stores/TodoStore/index.js'
import Todo from './Todo.js'
@observer
class TodoList extends React.Component {
    @observable todos = [];
    render() {
        return (todoStore.filteredTodos.map((todoModel) => {
            return (<Todo key={todoModel.id} todoModel={todoModel}/>)
        }))
    }
}
export default TodoList;
