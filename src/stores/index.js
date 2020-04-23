import UserService from '../services/UserService/index.fixture'
import TodoService from '../services/TodoService/index.api'
import CounterStore from './CounterStore'
import UserStore from './UsersStore'
import TodoStore from './TodoStore'

const counterStore = new CounterStore()
const usersStore = new UserStore(new UserService);
const todoStore = new TodoStore(new TodoService);

export default {
    usersStore,
    counterStore,
    todoStore,
}
