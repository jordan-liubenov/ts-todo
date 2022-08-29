import { Component } from "react";

import "../Todos/Todos.css";

class Todos extends Component<{ allTodos: string[]; updateAllTodos: Function }, {}> {
  constructor(props: any) {
    super(props);
  }

  setRandomKey = () => {
    return Math.random() * 120;
  };

  deleteTodo = (task: string) => {
    let currentTodoArray: any = localStorage.getItem("todoArray");
    currentTodoArray = JSON.parse(currentTodoArray);
    currentTodoArray = currentTodoArray.filter((x: string) => x != task);
    localStorage.setItem("todoArray", JSON.stringify(currentTodoArray));
    this.props.updateAllTodos(currentTodoArray);
  };

  render() {
    return (
      <div className="todoContainer">
        {this.props.allTodos.length > 0 ? (
          this.props.allTodos.map((task) => (
            <div className="todoEntry" key={this.setRandomKey()}>
              <p className="singleEntry">
                <span className="taskName">{task}.</span>{" "}
                <button className="completedButton">✔</button>
                <button className="deleteButton" onClick={() => this.deleteTodo(task)}>
                  ✖
                </button>
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
