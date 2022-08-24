import { Component } from "react";

class Todos extends Component<{}, {}> {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <div className="todoContainer">
        <div className="todoEntry">
          <span>Wash the dishes.</span>
        </div>
      </div>
    );
  }
}

export default Todos;
