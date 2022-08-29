import { Component } from "react";

import "../AddButton/AddButton.css";

class AddButton extends Component<{ setCreatedTodo: Function; setTextAreaValue: Function }, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="addButtonDiv">
        <button className="addButton" onClick={() => this.props.setCreatedTodo()}>
          Add New
        </button>
      </div>
    );
  }
}

export default AddButton;
