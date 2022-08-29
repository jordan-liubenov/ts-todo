import { Component } from "react";
import AddButton from "../AddButton/AddButton";

import "../Title/Title.css";
import Todos from "../Todos/Todos";
import TodoTextArea from "../TodoTextArea/TodoTextArea";

class Title extends Component<
  { setCreatedTodo: Function; setTextAreaValue: Function; allTodos: string[] },
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
          <AddButton setCreatedTodo={this.props.setCreatedTodo} />
          <Todos allTodos={this.props.allTodos} />
        </div>
      </div>
    );
  }
}
export default Title;
