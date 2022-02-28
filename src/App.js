import React, { Component } from 'react'
import Todos from './Todos'

 class App extends Component {

   state = {
     todos : [
       {id : 1 ,content : "do homework"},
       {id : 2, content : "do go the dinner"}
     ]
   }

   deleteTodo = (id) => {
     const todos = this.state.todos.filter(todo => {
        return todo.id !== id; 
      })
      this.setState({
        todos: todos
      })
   }

  render() {
    return (
      <div className="app">
           <h1>Hello word</h1>
           <Todos deteleTodo={this.deleteTodo} todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
