import { Component } from "react";

class AddButton extends Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div className="addButtonDiv">
        <button>Add New</button>
      </div>
    );
  }
}

export default AddButton;
