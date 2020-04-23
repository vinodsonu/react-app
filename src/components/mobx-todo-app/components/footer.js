import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import './../index'

@observer
class Footer extends React.Component {
    @action.bound
    onChangeSelectedFilter(filterType) {
        this.props.todoStore.onChangeSelectedFilter(filterType);
    }
    @action.bound
    onClearCompleted() {
        this.props.todoStore.onClearCompleted();
    }
    render() {
        let { activeTodosCount } = this.props.todoStore;
        return (<div key={Math.random()} className="footer" >
      <p><span className="items-left" id="itemsLeft">{activeTodosCount} itemsLeft</span></p>
      <button  onClick={()=>this.onChangeSelectedFilter("ALL")}className="show-all footer-btn">All</button>
      <button onClick={()=>this.onChangeSelectedFilter("ACTIVE")} className="active footer-btn">Active</button>
      <button onClick={()=>this.onChangeSelectedFilter("COMPLETED")}className="completed-tasks footer-btn">Completed</button>
      <button onClick={()=>this.onClearCompleted()} className="clear-completed-tasks footer-btn">clear completed</button>
    </div>)
    }
}
export default Footer;
