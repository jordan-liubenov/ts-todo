import { Component } from "react";

import "../TodoTextArea/TodoTextArea.css";

class TodoTextArea extends Component<{ setTextAreaValue: Function }, { newTodo: string }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="textAreaContainer">
        <textarea
          cols={25}
          rows={1}
          maxLength={25}
          onChange={(e) => this.props.setTextAreaValue(e)}
          className="todoTextArea"
          placeholder="New task name here.."
        ></textarea>
      </div>
    );
  }
}

export default TodoTextArea;
