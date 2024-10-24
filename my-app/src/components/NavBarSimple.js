import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, Guest!",
      butttonText: "Log in",
    };
  }

  handleclick = () => {
    this.setState(
      (prevState) => ({
        message:
          prevState.message === "Hello, guest!"
            ? "Welcome back, user!"
            : "Hello, guest!",
        buttonText: prevState.buttonText === "Log out" ? "Log in" : "Log out",
      }),
      () => console.log(this.state.message)
    );
  };

  // increment() {
  //   this.setState((prevState, prevProps) => {
  //     console.log("Previous State:", prevState);
  //     console.log("Previous Props:", prevProps);
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <button onClick={() => this.handleClick()}>
          {this.state.butttonText}
        </button>
      </div>
    );
  }
}

export default NavBarSimple;
