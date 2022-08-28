import { Component } from "react";
import AddButton from "../AddButton/AddButton";

import "../Title/Title.css";
import TodoTextArea from "../TodoTextArea/TodoTextArea";

class Title extends Component<
  { setCreatedTodo: Function; setTextAreaValue: Function },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="titleContainer">
        <h2 className="title">To-Do List</h2>
        <TodoTextArea setTextAreaValue={this.props.setTextAreaValue}/>
        <AddButton setCreatedTodo={this.props.setCreatedTodo} />
      </div>
    );
  }
}
export default Title;
