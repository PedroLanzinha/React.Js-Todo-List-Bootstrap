import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        <button type="button" className="btn btn-danger btn-block 
        text-capitalize mt-5">
        Delete List
        </button>
      </ul>
    )
  }
}
