import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './index.css';

export default class List extends Component {

  //對接收的props進行：類型,必要性的限制
  static defaultProps = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
  }

  render() {
    const {todos,updateTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} updateTodo={updateTodo}/>
          })
        }
      </ul>
    )
  }
}
