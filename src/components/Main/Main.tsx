import { Component } from "react";
import AddButton from "../AddButton/AddButton";

import "./Main.css";
import Todos from "../Todos/Todos";
import TodoTextArea from "../TodoTextArea/TodoTextArea";

class Main extends Component<
  {
    setCreatedTodo: Function;
    setTextAreaValue: Function;
    allTodos: string[];
    updateAllTodos: Function;
  },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="titleContainer">
        <div className="titleElements">
          <h2 className="title">To-Do List</h2>
          <TodoTextArea setTextAreaValue={this.props.setTextAreaValue} />
          <AddButton
            setCreatedTodo={this.props.setCreatedTodo}
            setTextAreaValue={this.props.setTextAreaValue}
          />
          <Todos allTodos={this.props.allTodos} updateAllTodos={this.props.updateAllTodos} />
        </div>
      </div>
    );
  }
}
export default Main;
