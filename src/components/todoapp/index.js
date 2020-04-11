/*global React*/
/*global ReactDOM*/
import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';
import './index.css';
@observer
class TodoApp extends React.Component {
    @observable inputItems = [];
    @action.bound
    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onSubmit(event.target.value);
            event.target.value = "";
        }
    }
    @action.bound
    onSubmit(inputText) {
        this.inputItems.push({ inputText: inputText, isChecked: false, id: Math.random() })
    }
    @computed
    get findOnOfTasksToComplete() {
        let tasksToComplete = 0;
        this.inputItems.forEach((todo) => {
            (todo.isChecked === false) ? (tasksToComplete++) : (tasksToComplete)
        })
        return tasksToComplete;
    }
    @action.bound
    eventsOnChildCheckBoxClick(event) {
        if (event.target.nextElementSibling.classList.contains('disable')) {
            event.target.nextElementSibling.classList.add('enable')
            event.target.nextElementSibling.classList.remove('disable')

        }
        else {
            event.target.nextElementSibling.classList.add('disable')
            event.target.nextElementSibling.classList.remove('enable')
        }
        let id = event.target.parentNode.id;
        let temp = [...this.inputItems];
        temp.map((item) => {

            if (item.id == id) {
                item.isChecked = !(item.isChecked)
            }
        })
        this.inputItems = temp;
    }
    @action.bound
    eventsOnChildDelBtnClick(event) {
        let id = event.target.parentNode.id;
        let temp = [...this.inputItems];
        let newTemp = temp.filter((item) => {
            if (item.id != id) {
                return temp;
            }
        })
        this.inputItems = newTemp;

    }
    @action.bound
    onActiveBtnClick() {
        this.inputItems.map((item) => {
            if (item.isChecked === true) {
                document.getElementById(item.id).style.display = "none";
            }
            else {
                document.getElementById(item.id).style.display = "flex";
            }
        })
    }
    @action.bound
    onAllBtnClick() {
        this.inputItems.map((item) => {
            document.getElementById(item.id).style.display = "flex";
        })
    }
    @action.bound
    onCompletedBtnClick() {
        this.inputItems.map((item) => {
            if (item.isChecked == true) {
                document.getElementById(item.id).style.display = "flex";
            }
            else {
                document.getElementById(item.id).style.display = "none";
            }
        })
    }
    @action.bound
    onClearCompletedBtnClick() {
        let temp = this.inputItems;
        let temp1 = [];
        temp.map((item) => {
            if (item.isChecked != true) {
                temp1.push(item);
            }
        })
        this.inputItems = temp1;

    }
    render() {
        let tasksToComplete = this.findOnOfTasksToComplete
        return (
            <div className="todoApp">
        <div  onSubmit={this.onSubmit}>
        <div className="heading">todo</div>
        <div className="default-row" >
          <input  className="todo-item"  placeholder="Next Todo" type="text" name="" onKeyDown={this.onKeyDown}/>
        {this.inputItems.map((item)=>{
             return <TodoComponent key={item.id} item={item} check={this.eventsOnChildCheckBoxClick} delete={this.eventsOnChildDelBtnClick}  /> 
          }) }
        </div>
        </div>
        <div className="footer" id="footer">
      <p><span className="items-left" id="itemsLeft">{tasksToComplete} itemsLeft</span></p>
      <button  onClick={this.onAllBtnClick}className="show-all footer-btn">All</button>
      <button onClick={this.onActiveBtnClick} className="active footer-btn">Active</button>
      <button onClick={this.onCompletedBtnClick}className="completed-tasks footer-btn">Completed</button>
      <button onClick={this.onClearCompletedBtnClick} className="clear-completed-tasks footer-btn">clear completed</button>
    </div>
    
      </div>
        );
    }
}
class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="appended-child" id={this.props.item.id}>
        <input onChange={this.props.check} className="child-checkbox" type="checkbox" />
        <input type="text"  className="child-text" value={this.props.item.inputText}/>
        <button onClick={this.props.delete}className="child-del-btn">X</button>
        </div>)
    }
}
export default TodoApp;
