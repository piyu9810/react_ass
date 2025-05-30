import React, { Component } from "react";

class LifecycleLogger extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated! Previous count:", prevState.count);
  }

  componentWillUnmount() {
    console.log("Component is unmounting!");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Logger</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}

export default LifecycleLogger;
