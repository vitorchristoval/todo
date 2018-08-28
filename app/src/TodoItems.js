import React, { Component } from "react";

class TodoItems extends Component {
    criarTarefas(item) {
        return <li key={item.key}><input type="checkbox" onClick={() => this.delete(item.key)}/>{item.text}</li>
    }

    render() {
        var Lista = this.props.entries;
        var listaItems = Lista.map(this.criarTarefas);

        return (
            <ul className="lista">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Tarefa</th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems}
                </tbody>
            </ul>
        );
    }
};

export default TodoItems;