import { observable, action, computed } from 'mobx';
import { observer, reaction } from 'mobx-react';

import TodoModel from './../models/TodoModel/index.js'
class TodoStore {
    @observable todos = [];
    @observable selectedFilter = 'ALL';
    @observable isFetchedDataEmpty = false;
    @action.bound
    onAddTodo(userInput, id, isCompleted) {
        if (this.fetchedDataEmpty === false)
            this.fetchedDataEmpty = true;
        this.todos.push(new TodoModel({ userInput: userInput, isChecked: isCompleted, id: id }))
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
        alert(selectedFilter);
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
                    if (todo.isChecked != true)
                        return true;
                })
                break;
            case "COMPLETED":
                todosToDisplay = this.todos.filter((todo) => {
                    if (todo.isChecked == true)
                        return true;
                })
                break;
        }
        return todosToDisplay

    }
}
const todoStore = new TodoStore();
export default todoStore;
