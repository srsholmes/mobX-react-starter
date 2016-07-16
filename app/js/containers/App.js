import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <h3>mobX Starter</h3>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.timer.timer}
        </button>
        <CounterView {...this.props} />
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.timer.resetTimer();
  }
};

export default App;

const CounterView = observer(props =>
  <div>
    <h3>{props.counter.counter}</h3>
    <button onClick={() => props.counter.increment()}>+</button>
    <button onClick={() => props.counter.decrement()}>-</button>
  </div>
)
