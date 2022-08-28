import { Component } from "react";

import "../Todos/Todos.css";

class Todos extends Component<{ allTodos: string[] }, {}> {
  constructor(props: any) {
    super(props);
  }

  setRandomId = () => {
    return Math.random() * 120;
  };

  render() {
    return (
      <div className="todoContainer">
        {this.props.allTodos.length > 0 ? (
          this.props.allTodos.map((e) => (
            <div className="todoEntry" key={this.setRandomId()}>
              <p className="singleEntry">
                <span className="taskName">{e}.</span>{" "}
                <button className="completedButton">✔</button>
                <button className="deleteButton">✖</button>
              </p>
            </div>
          ))
        ) : (
          <h3>No tasks yet..</h3>
        )}
      </div>
    );
  }
}

export default Todos;
