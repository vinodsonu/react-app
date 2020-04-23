/*global React*/
import React from 'react';
import { observable, action, computed, reaction } from 'mobx';
import { observer } from 'mobx-react';
var ScrollArea = require('react-scrollbar');

import TodoModel from './../../../stores/models/TodoModel/index'
import './../index';
import Todo from './Todo'

@observer
class TodoList extends React.Component {
    @observable todos = [];
    render() {
        return (
            this.props.todoStore.filteredTodos.map((todoModel) => {
                return (<Todo todoStore={this.props.todoStore} key={todoModel.id} todoModel={todoModel}/>)
            })
        )
    }
}
export default TodoList;
