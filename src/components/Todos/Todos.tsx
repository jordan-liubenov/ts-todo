import { Component } from "react";

import "../Todos/Todos.css";

class Todos extends Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div className="todoContainer">
        <div className="todoEntry">
          <p className="singleEntry">
            <span className="taskName">Wash the dishes.</span>{" "}
            <button className="completedButton">✔</button>
            <button className="deleteButton">✖</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Todos;
