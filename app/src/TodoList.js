import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.adicionarTarfa = this.adicionarTarfa.bind(this);
    }
    adicionarTarfa(e) {
        if (this._inputElement.value !== "") {
            var NovaTarefa = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(NovaTarefa)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
    deleteTarefa(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
    render() {
        return (
            <div className="App">
            <div className="">
              <form onSubmit={this.adicionarTarfa}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="Adicionar tarefa">
                </input>
                <button type="submit">adicionar</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}  delete={this.deleteTarefa}/>
          </div>
        );
    }
}

export default TodoList;