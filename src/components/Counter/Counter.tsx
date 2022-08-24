import { Component } from "react";

class Counter extends Component<{}, { message: string; counter: number }> {
  constructor(props: Object) {
    super(props);

    this.state = {
      message: "",
      counter: 0,
    };
  }

  componentDidMount() {
    this.setState({ message: "Data fetched from API!" });
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.counter != prevState.counter) {
      this.setState({ message: "Fetch function has been ran again!" });
    }
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="counterContainer">
        <p>{this.state.message}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.incrementCounter()}>Increment</button>
        <button onClick={() => this.decrementCounter()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
