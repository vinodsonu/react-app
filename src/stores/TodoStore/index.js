import { observable, action, computed } from 'mobx';
import { observer, reaction } from 'mobx-react';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED,
}
from '@ib/api-constants';

import TodoModel from './../models/TodoModel/index.js'
class TodoStore {
    @observable todos
    @observable selectedFilter
    @observable getTodosAPIStatus
    @observable getTodosAPIError
    todoService;
    constructor(todoService) {
        this.todoService = todoService;
        this.init();
    }
    @action.bound
    init() {
        this.todos = []
        this.selectedFilter = 'ALL'
        this.getTodosAPIStatus = API_INITIAL;
        this.getTodosAPIError = null;
    }
    @action.bound
    getTodos() {
        const todoPromise = this.todoService.getUsersAPI();
        return bindPromiseWithOnSuccess(todoPromise)
            .to(this.setTodosAPIStatus, this.setTodosAPIResponse)
            .catch(this.setTodosAPIError);
    }
    @action.bound
    setTodosAPIResponse(todoResponse) {
        this.todos = todoResponse.map((todo) => new TodoModel({ userInput: todo.title, isChecked: todo.completed, id: todo.id }))
    }
    @action.bound
    setTodosAPIError(error) {
        this.getTodosAPIError = error
    }
    @action.bound
    setTodosAPIStatus(apiStatus) {
        this.getTodosAPIStatus = apiStatus;
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
                    if (todo.isChecked != true)
                        return true;
                })
                break;
            case "COMPLETED":
                todosToDisplay = this.todos.filter((todo) => {
                    if (todo.isChecked == true)
                        return true
                })
                break;
        }
        return todosToDisplay
    }
    @action.bound
    clearStore() {
        this.init()
    }
}
export default TodoStore
