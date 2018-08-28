import React, { Component } from "react";
 
class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Criar Tarefa">
            </input>
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default TodoList;