import React from "react";

class StatefulGreetingWithCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      butttonText: "Exit",
    };
  }

  handleClick() {
    this.setState(
      {
        introduction: "Goodbye!",
        butttonText: "Enter",
      },
      () => {
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.butttonText);
      }
    );
    console.log(this.state.introduction);
    console.log(this.state.butttonText);
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
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;
