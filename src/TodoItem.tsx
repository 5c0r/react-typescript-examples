import React, { Component } from "react";

// TODO: Props and data model
export interface TodoProps {
  label: string;
  done: boolean;
  onCheck?: any;
  onLabelChange?: any;
  editText?: boolean;
}

export class TodoItemState {
  editable: boolean = false;
  label: string = "";
}

export class TodoItem extends Component<TodoProps, TodoItemState> {
  // TODO: Find good Typescript React convention
  constructor(props: TodoProps) {
    super(props);
    this.state = {
      editable: false,
      label: props.label
    };
  }

  onClick() {
    this.setState({
      editable: true
    });
  }

  onChange(e: any) {
    this.setState({
      label: e.target.value
    });
  }

  onBlur(e: any) {
    this.setState({
      editable: false
    });

    if (this.props.onLabelChange) this.props.onLabelChange(e.target.value);
  }

  render() {
    const { editable, label } = this.state;
    const { done, onCheck } = this.props;

    return (
      <div>
        <input type="checkbox" onChange={onCheck} defaultChecked={done} />
        {editable ? (
          <input
            onBlur={this.onBlur.bind(this)}
            onChange={this.onChange.bind(this)}
            type="text"
            value={label}
          />
        ) : (
          <label onClick={this.onClick.bind(this)}>{label || 'Empty'}</label>
        )}
      </div>
    );
  }
}

export default TodoItem;
