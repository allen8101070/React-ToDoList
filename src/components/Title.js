import React, { Component } from 'react';

class Title extends Component {
    render() {
      return (
        <div>
            <h2>代辦事項清單({this.props.todos.length})</h2>
        </div>
      );
    }
  }
  
  export default Title;