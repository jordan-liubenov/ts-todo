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

  componentDidMount() {
    let todoArray = localStorage.getItem("todoArray");
    if (todoArray == null) {
      const newToDoArray: string[] = [];
      localStorage.setItem("todoArray", JSON.stringify(newToDoArray));
    }
  }

  setTextAreaValue = (e: any) => {
    const { value } = e.target;
    this.setState({ currentTextAreaValue: value });
  };

  setCreatedTodo = () => {
    let todoArr: string[] = this.state.allTodos;
    //only add task if the text area is empty
    if (this.state.currentTextAreaValue != "") {
      if (todoArr.includes(this.state.currentTextAreaValue)) return; //if task exists, prevent duplicate
      todoArr.push(this.state.currentTextAreaValue);
      this.setState({
        allTodos: todoArr,
      });
      localStorage.setItem("todoArray", JSON.stringify(todoArr)); //update localStorage value with newly added task
    }
  };

  render() {
    return (
      <div className="App">
        <Title
          setCreatedTodo={this.setCreatedTodo}
          setTextAreaValue={this.setTextAreaValue}
          allTodos={this.state.allTodos}
        />
      </div>
    );
  }
}

export default App;
