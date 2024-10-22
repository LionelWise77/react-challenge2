import React from "react";

class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      butttonText: "Exit",
    };
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button>{this.state.butttonText}</button>
      </div>
    );
  }
}

export default StatefulGreeting;
