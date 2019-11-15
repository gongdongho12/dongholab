import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

interface Props {

}

interface State {
  counter: number
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  onIncrement = () => {
    this.setState((prevState: Readonly<State>) => ({
      counter: prevState.counter + 1,
    }));
  }

  onDecrement = () => {
    this.setState((prevState: Readonly<State>) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const {counter} = this.state;

    return (<div>
        <h1>My Counter</h1>
        <Counter counter={counter} />

        <button
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>);
  }
}

export default App;
