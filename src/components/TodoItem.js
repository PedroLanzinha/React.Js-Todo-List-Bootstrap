import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex
      justify-content-between my-2">
        <h6>Title</h6>
        <div className="todo-icon"></div>
        <span className="mx-2 text-sucess">
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger">
          <i className="fas fa-trash"></i>
        </span>
      </li>
    )
  }
}
