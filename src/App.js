import React, { Component } from 'react';
import Title from './components/Title';
import CreateTodo from './components/CreatTodo';
import TodoList from './components/TodoList';

class App extends Component {

  constructor() {
    super();
    let todos = ['買牛奶', '繳電話費', '去銀行'];
    this.state = {
      todos: todos,
    }
  }

  setTodoData(newtodo) {
    console.log("我被觸發了，在App.js的setTodoData方法")
    console.log("setTodoData更新todos陣列資料")
    console.log(newtodo)
    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }
  render() {
    return (
      <div>
          <Title todos={this.state.todos}/>
          <CreateTodo todos={this.state.todos}
             setTodoData={(newtodo) => this.setTodoData(newtodo)}/>
          <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
