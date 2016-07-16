import {observable} from 'mobx';

class Counter {
  @observable counter = 0;
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}

export default Counter
