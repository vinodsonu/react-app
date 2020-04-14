import { observable, action } from 'mobx'

class Counter {
    @observable count = 0;
    constructor() {
        this.count = 0;
    }
    @action.bound
    onIncrement() {
        this.count = (this.count === "") ? (0) : (this.count);
        this.count = parseInt(this.count) + 1;
    }
    @action.bound
    onDecrement() {
        this.count = (this.count === "") ? (0) : (this.count);
        this.count = parseInt(this.count) - 1;
    }
    @action.bound
    onChangeCount(value) {
        this.count = value;
    }

}
const CounterStore = new Counter();
export default CounterStore;
