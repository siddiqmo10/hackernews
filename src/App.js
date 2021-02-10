import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const helloWorld = "Welcome to the Road to learn React!";
    var user = { firstName: "mo", lastName: "sid" };

    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>
          My name is {user.firstName} {user.lastName}{" "}
        </h3>
      </div>
    );
  }
}

export default App;
