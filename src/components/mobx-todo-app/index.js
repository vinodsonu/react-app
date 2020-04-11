/*global React*/
/*global ReactDOM*/
import React from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import './index.css';
import AddTodo from './components/AddTodo.js';
import Footer from './components/footer.js';

@observer
class TodoApp extends React.Component {
    render() {
        return (<div className="todo-container"><AddTodo/>
        <Footer/>
        </div>);
    }
}
export default TodoApp;
