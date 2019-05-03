import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} =this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo list</h3>
        {
          items.map(item => {
            return( 
            <TodoItem 
              key={item.id} 
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              //handleDelete={handleDelete(/*item.id easy way not the correct way*/)}
              handleEdit={() => handleEdit(item.id)}
              />
            )})
        }
        <button 
          type="button" 
          className="btn btn-danger btn-block 
          text-capitalize mt-5"
          onClick= {clearList}
          >
          Clear List
        </button>
      </ul>
    )
  }
}
