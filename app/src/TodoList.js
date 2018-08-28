import React, { Component } from "react";


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
    render() {
        return (
            <div className="">
            <div className="">
              <form onSubmit={this.adicionarTarfa}>
                <input ref={(a) => this._inputElement = a} 
                        placeholder="Adicionar tarefa">
                </input>
                <button type="submit">adicionar</button>
              </form>
            </div>
          </div>
        );
    }
}

export default TodoList;