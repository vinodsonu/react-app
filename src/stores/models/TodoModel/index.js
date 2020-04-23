import React from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'

class TodoModel {
    id = 0;
    @observable userInput = '';
    @observable isChecked = false;
    constructor(todo) {
        this.id = todo.id,
            this.userInput = todo.userInput;
        this.isChecked = todo.isChecked;
    }
    @action.bound
    onChangeInput(value) {
        this.userInput = value;
    }
    @action.bound
    onCompleteTodo() {
        this.isChecked = !this.isChecked
    }
}
export default TodoModel;
