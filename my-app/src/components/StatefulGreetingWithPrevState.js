import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      butttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState(
      {
        introduction:
          this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
        butttonText: this.state.butttonText === "Exit" ? "Enter" : "Exit",
      },
      () => {
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.butttonText);
      }
    );
    console.log(this.state.introduction);
    console.log(this.state.butttonText);
  }

  increment() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous Props:", prevProps);
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button onClick={() => this.handleClick()}>
          {this.state.butttonText}
        </button>
        <button onClick={() => this.increment()}>Increment</button>
        <p>You've clicked {this.state.count} times </p>
      </div>
    );
  }
}

export default StatefulGreetingWithPrevState;
