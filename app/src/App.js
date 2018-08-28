import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      
      <div className="App">

      <TodoList/>
        <h4>Hey, vá para a página da lista ;)</h4>
        <a href="/TodoList">Ir para lista!</a>
      </div>
    );
  }
}

export default App;
