import React from 'react';
import TodoInput from  './components/TodoInput'
import TodoList from  './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

function App() {

  state={
    items:[],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
        item: e.target.value
    });
  };
  HandleSubmit = e =>{
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      item:this.state.item
    };
    console.log(newItem);

    const UpdatedItems = [...this.state.items,newItem];
    this.setState({
      items: UpdatedItems,
      item:'',
      id:uuid(),
      editItem: false
    });

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput item={this.state.item} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
