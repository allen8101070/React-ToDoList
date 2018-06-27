import React, { Component } from 'react';
import TodoInput from './TodoInput';
import CreateTodoButton from './CreateTodoButton';

class CreaetTodo extends Component {

  constructor() {
    super();
    this.state = {
      inputText: '',
    }
  }

  createTodo() {
    console.log("我被觸發了，在CreateTodo.js的createTodo方法")
    console.log("this.props.createTodo是：")
    console.log(this.props.createTodo)
    console.log("this.state.inputText是：")
    console.log(this.state.inputText)
    console.log("-----------------------------")
    if (this.state.inputText) {
      this.props.createTodo &&
        this.props.createTodo(this.state.inputText);
      this.setState({
        inputText: ''
      })
    }
  }

  udpateInputText(event) {
    console.log("我被觸發了，在CreateTodo.js的udpateInputText方法")
    console.log("event.target.value是：")
    console.log(event.target.value)
    console.log("-----------------------------")
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoInput inputText={this.state.inputText}
          udpateInputText={(event) => this.udpateInputText(event)} />
        <CreateTodoButton createTodo={() => this.createTodo()} />
      </div>);
  }
}

export default CreaetTodo;
