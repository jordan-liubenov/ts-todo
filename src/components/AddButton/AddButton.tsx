import { Component } from "react";

import "../AddButton/AddButton.css";

class AddButton extends Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  clickHandler = () => {
    console.log(this);
  };

  render() {
    return (
      <div className="addButtonDiv">
        <button className="addButton" onClick={this.clickHandler}>
          Add New
        </button>
      </div>
    );
  }
}

export default AddButton;
