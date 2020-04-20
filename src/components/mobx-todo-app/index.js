/*global React*/
/*global ReactDOM*/
/*global fetch*/
/*global navigator*/

import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import todoStore from '../../stores/TodoStore/index'
import loaderIcon from './../covidApp/react/countryListAssets/loader-icon.svg'
import AddTodo from './components/AddTodo';
import Footer from './components/footer';
import './index.css';
import { TryAgainButton } from './styleComponents.js';

@observer
class TodoApp extends React.Component {
    @observable loadingData;
    @observable isDisConnected = false;
    constructor() {
        super();
        this.loadingData = true;
    }
    componentDidMount() {
        window.addEventListener('offline', this.handleConnectionChange);
        this.getInitialTodosToDisplay();
    }
    componentWillUnmount() {
        window.removeEventListener('offline', this.handleConnectionChange);
    }
    getInitialTodosToDisplay = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(function(response) {
                if (!response.ok)
                    throw Error(response.statusText);
                else
                    return (response.json())
            })
            .then((data) => {
                this.loadingData = false;
                if (data.length != 0)
                    data.forEach((todo) => {
                        todoStore.onAddTodo(todo.title, todo.id, todo.completed);
                    })
                else
                    todoStore.isFetchedDataEmpty = true;
            })

    }
    handleConnectionChange = () => {
        this.isDisConnected = true;
    }
    showNoDataFound = () => {
        if (todoStore.isFetchedDataEmpty)
            return <div className='text-center'>no data found</div>;
    }
    showLoading = () => {
        {
            let loadingData = (this.loadingData) ? (<div className="loader-div" ><img className="loader-icon" src={loaderIcon}/></div>) : (null)
            return loadingData;
        }
    }
    onRetry = () => {
        this.getInitialTodosToDisplay();
        if (navigator.onLine)
            this.isDisConnected = false;
    }
    render() {
        if (this.isDisConnected)
            return (<div className="network-msg-display-container">
            <div className="network-msg">NetWork error</div>
            <TryAgainButton onClick={this.onRetry}>retry</TryAgainButton>
            </div>)
        else
            return (<div  className="todo-container">
        <AddTodo/>
        {this.showNoDataFound()}
        {this.showLoading()}
        <Footer/>
        </div>)
    }
}
export default TodoApp;
