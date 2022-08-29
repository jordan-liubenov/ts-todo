import { Component } from "react";

import "./App.css";

import Main from "./components/Main/Main";

class App extends Component<{}, { currentTextAreaValue: string; allTodos: string[] }> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentTextAreaValue: "",
      allTodos: [],
    };
  }

  componentDidMount() {
    let todoArray: any = localStorage.getItem("todoArray");
    if (todoArray == null) {
      const newToDoArray: string[] = [];
      localStorage.setItem("todoArray", JSON.stringify(newToDoArray));
    } else {
      todoArray = JSON.parse(todoArray);
      this.setState({
        allTodos: todoArray,
      });
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
      localStorage.setItem("todoArray", JSON.stringify(todoArr)); //update localStorage value with newly added task
      let currentLocalStorageArray: any = localStorage.getItem("todoArray");
      currentLocalStorageArray = JSON.parse(currentLocalStorageArray);
      this.setState({
        allTodos: currentLocalStorageArray,
      });
    }
  };

  updateAllTodos = (arr: string[]) => {
    this.setState({
      allTodos: arr,
    });
  };

  render() {
    return (
      <div className="App">
        <Main
          setCreatedTodo={this.setCreatedTodo}
          setTextAreaValue={this.setTextAreaValue}
          allTodos={this.state.allTodos}
          updateAllTodos={this.updateAllTodos}
        />
      </div>
    );
  }
}

export default App;
