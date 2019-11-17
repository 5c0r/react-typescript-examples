import React, { Component, KeyboardEvent, InputHTMLAttributes } from "react";
import TodoItem from "./TodoItem";

export default class Todo extends Component<{}> {
  // TODO: Hooks ? , do we use this or constructor
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

  constructor(props: any) {
    super(props);

    // We don't bind(this) in render
    this.onNewTodoEnter = this.onNewTodoEnter.bind(this);
    this.onMoreTodo = this.onMoreTodo.bind(this);
  }

  onCheck(i: number) {
    this.state.todoList[i].done = !this.state.todoList[i].done;
    this.setState(this.state);
  }

  onTodoItemChange(ev: any, i: any) {
    console.log(ev, i);
    this.state.todoList[i].label = ev;
    this.setState(this.state);
  }

  onNewTodoEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && event.currentTarget.value.length !== 0) {
      this.onMoreTodo(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  }

  onMoreTodo(label: string) {
    this.state.todoList.push({
      label: label,
      done: false
    });
    this.setState({
      ...this.state
    });
  }

  render() {
    const { todoList } = this.state;

    return (
      <>
        <h4>Todos</h4>
        <input
          type="text"
          placeholder="What needs to be done ?"
          onKeyDown={this.onNewTodoEnter}
        />
        {todoList.map((x, i) => (
          <TodoItem
            key={i}
            done={x.done}
            onCheck={this.onCheck.bind(this, i)}
            onLabelChange={(event: any) => this.onTodoItemChange(event, i)}
            label={x.label}
          />
        ))}
      </>
    );
  }
}
