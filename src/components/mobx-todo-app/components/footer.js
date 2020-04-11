import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import './../index.css'

import todoStore from './../../../stores/TodoStore/index.js'
@observer
class Footer extends React.Component {
    constructor() {
        super();
    }
    @action.bound
    onChangeSelectedFilter(filterType) {
        todoStore.onChangeSelectedFilter(filterType);
    }
    @action.bound
    onClearCompleted() {
        todoStore.onClearCompleted();
    }
    render() {
        return (<div className="footer" id="footer">
      <p><span className="items-left" id="itemsLeft">{todoStore.activeTodosCount} itemsLeft</span></p>
      <button  onClick={()=>this.onChangeSelectedFilter("ALL")}className="show-all footer-btn">All</button>
      <button onClick={()=>this.onChangeSelectedFilter("ACTIVE")} className="active footer-btn">Active</button>
      <button onClick={()=>this.onChangeSelectedFilter("COMPLETED")}className="completed-tasks footer-btn">Completed</button>
      <button onClick={()=>this.onClearCompleted()} className="clear-completed-tasks footer-btn">clear completed</button>
    </div>)
    }
}
export default Footer;
