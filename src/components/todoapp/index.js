/*global React*/
/*global ReactDOM*/
import React from 'react';
import './index.css';
let id = 0;
let tasks = 0;
const footer = document.getElementById("footer");
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            inputItems: [],
            noOfTasksToComplete: 0,
        };
    }
    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onSubmit(event.target.value);
            event.target.value = "";
            tasks++;
            this.setState({ noOfTasksToComplete: tasks })
        }
    }
    onSubmit = (inputText) => {
        this.setState({
            inputItems: [...this.state.inputItems, { inputText: inputText, isChecked: false, id: Math.random() }],
        });
    }
    eventsOnChildCheckBoxClick = (event) => {
        if (event.target.nextElementSibling.style.textDecoration == "line-through") {
            event.target.nextElementSibling.style.textDecoration = "none";
            event.target.nextElementSibling.disabled = false;
            id = event.target.parentNode.id;
            tasks += 1
            this.setState({ noOfTasksToComplete: tasks })
        }
        else {
            event.target.nextElementSibling.style.textDecoration = "line-through"
            event.target.nextElementSibling.style.color = "##e0ebeb"
            event.target.nextElementSibling.disabled = true;
            id = event.target.parentNode.id;
            tasks -= 1
            this.setState({ noOfTasksToComplete: tasks })
        }
        let temp = this.state.inputItems;
        temp.map((item) => {

            if (item.id == event.target.parentNode.id) {
                item.isChecked = (item.ischecked) ? (false) : (true);
            }
        })
    }
    eventsOnChildDelBtnClick = (event) => {
        if (event.target.previousElementSibling.previousElementSibling.checked === false) {
            tasks -= 1;
        }
        else {
            tasks += 1;
        }
        this.setState({ noOfTasksToComplete: tasks })
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
    onActiveBtnClick = () => {
        this.state.inputItems.map((item) => {
            if (item.isChecked === true) {
                document.getElementById(item.id).style.display = "none";
            }
            else {
                document.getElementById(item.id).style.display = "flex";
            }
        })
    }
    onAllBtnClick = () => {
        this.state.inputItems.map((item) => {
            document.getElementById(item.id).style.display = "flex";
        })
    }
    onCompletedBtnClick = () => {
        this.state.inputItems.map((item) => {
            if (item.isChecked == true) {
                document.getElementById(item.id).style.display = "flex";
            }
            else {
                document.getElementById(item.id).style.display = "none";
            }
        })
    }
    onClearCompletedBtnClick = () => {
        let temp = this.state.inputItems;
        let temp1 = [];
        temp.map((item) => {
            if (item.isChecked != true) {
                temp1.push(item);
            }
        })
        tasks = temp1.length;
        this.setState({ inputItems: temp1 })
        this.setState({ noOfTasksToComplete: tasks })
    }
    render() {
        return (
            <div className="todoApp">
        <div  onSubmit={this.onSubmit}>
        <div className="heading">todo</div>
        <div className="default-row" >
          <input  className="todo-item"  placeholder="Next Todo" type="text" name="" onKeyDown={this.onKeyDown}/>
        {this.state.inputItems.map((item)=>{
              return <TodoComponent key={item.id} item={item} check={this.eventsOnChildCheckBoxClick} delete={this.eventsOnChildDelBtnClick}  /> 
           }) }
        </div>
        </div>
        <div className="footer" id="footer">
      <p><span className="items-left" id="itemsLeft">{this.state.noOfTasksToComplete} itemsLeft</span></p>
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
    onFocus = (event) => {
        event.target.style.border = "2px solid #e1e1e1"
    }
    onBlur = (event) => {
        event.target.style.border = "none"
    }
    render() {
        console.log(this.props);
        return (<div className="appended-child" id={this.props.item.id}>
        <input onChange={this.props.check} className="child-checkbox" type="checkbox" />
        <div  onFocus={this.onFocus} onBlur={this.onBlur} className="child-text">{this.props.item.inputText}</div>
        <button onClick={this.props.delete}className="child-del-btn">X</button>
        </div>)
    }
}
const root = document.getElementById("root");
export default TodoApp;
