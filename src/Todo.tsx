import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todo extends Component {
  // TODO: Hooks
  state = {
    todoList: [
      {
        label: "Something",
        done: true
      },
      {
        label: "Something else",
        done: false
      }
    ]
  };

  onCheck(i: number) {
    this.state.todoList[i].done = !this.state.todoList[i].done;
    this.setState(this.state);
  }

  onTodoItemChange(ev: any, i: any) {
    console.log(ev, i);
    this.state.todoList[i].label = ev;
    this.setState(this.state);
  }

  render() {
    // TODO
    const onMoreTodo = () => {
      this.state.todoList.push({
        label: "",
        done: false
      });
      this.setState({
        ...this.state
      });
    };
    const { todoList } = this.state;

    return (
      <div>
        Todo list
        {todoList.map((x, i) => (
          <TodoItem
            key={i}
            done={x.done}
            onCheck={this.onCheck.bind(this, i)}
            onLabelChange={(event: any) => this.onTodoItemChange(event, i)}
            label={x.label}
          />
        ))}
        <button type="button" onClick={onMoreTodo}>
          More TODO
        </button>
      </div>
    );
  }
}
