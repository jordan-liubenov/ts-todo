import { Component } from "react";
import AddButton from "../AddButton/AddButton";

import "../Title/Title.css";

class Title extends Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div className="titleContainer">
        <h2>TO-DO List</h2>
        <AddButton />
      </div>
    );
  }
}

export default Title;
