import { observable, action, computed, reaction } from 'mobx';
import { observer } from 'mobx-react';
import TodoModel from './../models/TodoModel/index.js'
class TodoStore {
    @observable todos = [];
    @observable selectedFilter = 'ALL';

    @action.bound
    onAddTodo(userInput) {
        this.todos.push(new TodoModel({ userInput: userInput, isChecked: false, id: Math.random() }))
        console.log(new TodoModel({ userInput: userInput, isChecked: false, id: Math.random() }))
    }
    @action.bound
    onRemoveTodo(id) {
        let temp = [...this.todos];
        let newTemp = temp.filter((item) => {
            if (item.id != id) {
                return temp;
            }
        })
        this.todos = newTemp;
    }
    @action.bound
    onChangeSelectedFilter(selectedFilter) {
        this.selectedFilter = selectedFilter
    }
    @action.bound
    onClearCompleted() {
        let temp1 = this.todos.filter((todo) => {
            if (todo.isChecked != true)
                return true;
        })

        this.todos = temp1;
    }
    @computed get activeTodosCount() {
        let tasksToComplete = 0;
        this.todos.forEach((todo) => {
            (todo.isChecked === false) ? (tasksToComplete++) : (tasksToComplete)
        })
        return tasksToComplete;
    }
    @computed get filteredTodos() {
        let todosToDisplay = [];
        switch (this.selectedFilter) {
            case "ALL":
                todosToDisplay = [...this.todos];
                break;
            case "ACTIVE":
                todosToDisplay = this.todos.filter((todo) => {
                    if (todo.isChecked !== true)
                        return true;
                })
                break;
            case "COMPLETED":
                todosToDisplay = this.todos.filter((todo) => {
                    if (todo.isChecked === true)
                        return true;
                })
                break;
        }
        return todosToDisplay

    }
    onTodoAdd = reaction(() => (this.todos.length), (length) => { console.log("no of todos", length) })
    onChangeTodoText = reaction(() => this.todos.map((todo) => todo.userInput), (value) => { console.log(value) })
}
const todoStore = new TodoStore();
export default todoStore;
