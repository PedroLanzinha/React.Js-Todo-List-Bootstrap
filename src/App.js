import React from 'react';
import TodoInput from  './components/TodoInput'
import TodoList from  './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

function App() {

  state={
    items: [],
    id: 0,
    item= "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
        item: e.target.value
    });

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput item={this.state.item} 
          handleChange={this.handleChange}/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
