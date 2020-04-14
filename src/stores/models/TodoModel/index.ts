import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

export type TodoObjectType={
    id:number,
    userInput:string,
    isChecked:boolean,
}
class TodoModel {
    id:number = 0;
    @observable userInput:string = '';
    @observable isChecked:boolean = false;
    constructor(todo:TodoObjectType) {
        this.id = todo.id,
        this.userInput = todo.userInput;
        this.isChecked = todo.isChecked;
    }
    @action.bound
    onChangeInput(value) {
        this.userInput = value;
    }
    @action.bound
    onCompleteTodo(event) {
        if (event.target.nextElementSibling.classList.contains('disable')) {
            event.target.nextElementSibling.classList.add('enable')
            event.target.nextElementSibling.classList.remove('disable')
            this.isChecked = false;

        }
        else {
            event.target.nextElementSibling.classList.add('disable')
            event.target.nextElementSibling.classList.remove('enable')
            this.isChecked = true;
        }
    }
}
export default TodoModel;
