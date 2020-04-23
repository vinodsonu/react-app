/*global React*/
/*global ReactDOM*/
/*global fetch*/
/*global navigator*/

import React from 'react';
import { observable, action, computed } from 'mobx'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import AddTodo from './components/AddTodo'
import Footer from './components/footer'
import Todo from './components/Todo'
import './index.css';
import { TryAgainButton } from './styleComponents.js'

@inject("todoStore")
@observer
class TodoApp extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }
    @action.bound
    getStore() {
        return this.props.todoStore
    }
    @action.bound
    doNetworkCalls() {
        this.getStore().getTodos()
    }
    @action.bound
    renderTodosList() {
        let { todos } = this.getStore()
        return (
            <div>
            <AddTodo todoStore={this.getStore()}/></div>)

    }
    const
        render() {
            const {
                getTodosAPIStatus,
                getTodosAPIError,
            } = this.getStore();
            return (<div className="todo-container" >
            <LoadingWrapperWithFailure
                        apiStatus={getTodosAPIStatus}
                        apiError={getTodosAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderTodosList}/>
            <Footer todoStore={this.getStore()}/>
            </div>)
        }
}
export default TodoApp;
