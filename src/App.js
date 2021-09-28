import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="hijo">

        <div class="row text-white bg-dark border ">
          
          <h1 className="text-center">ToDo List - Camps Luis Adrian</h1>
          <Todos />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
