import React, { Component } from 'react'
import $ from 'jquery';

export default class TabelaAutores extends Component {

    constructor(props) {
        super(props);
                
        this.state = {
          lista: [],
          nome: '',
          email: '',
          senha: ''
        };
    }

    render() {
        return (
            <div>
            <table className="pure-table">
            <thead>
                <tr>
                <th>Nome</th>
                <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                this.props.updatedList.map(function (autor) {
                    return (
                    <tr key={autor.id}>
                        <td>{autor.nome}</td>
                        <td>{autor.email}</td>
                    </tr>
                    );
                })
                }
            </tbody>
            </table>
        </div>
        )
  }
}
