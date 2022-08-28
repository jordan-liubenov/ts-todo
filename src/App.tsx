import { Component } from "react";

import "./App.css";

import Title from "./components/Title/Title";
import Todos from "./components/Todos/Todos";

class App extends Component<{}, { currentTextAreaValue: string; allTodos: string[] }> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentTextAreaValue: "",
      allTodos: [],
    };
  }

  setTextAreaValue = (e: any) => {
    const { value } = e.target;
    this.setState({ currentTextAreaValue: value });
  };

  setCreatedTodo = () => {
    let todoArr: string[] = this.state.allTodos;
    //only add task if the text area is empty
    if (this.state.currentTextAreaValue != "") {
      if (todoArr.includes(this.state.currentTextAreaValue)) return; //if task exists, prevent duplicate creation
      todoArr.push(this.state.currentTextAreaValue);
      this.setState({
        allTodos: todoArr,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="App-header">
          <Title setCreatedTodo={this.setCreatedTodo} setTextAreaValue={this.setTextAreaValue} />
          <Todos allTodos={this.state.allTodos} />
        </div>
      </div>
    );
  }
}

export default App;
