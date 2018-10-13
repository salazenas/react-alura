import React, { Component } from 'react'
import TabelaAutores from './tabelaAutores';
import { CustomInput, CustomSubmit} from './customInput'
import $ from 'jquery';

export default class FormularioAutor extends Component {

    constructor() {
        super();
        this.state = {
          lista: [],
          nome: '',
          email: '',
          senha: ''
        };
        this.enviaForm = this.enviaForm.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setSenha = this.setSenha.bind(this)
        this.setEmail = this.setEmail.bind(this)
    }

    componentDidMount() {
        $.ajax({
            url: "http://cdc-react.herokuapp.com/api/autores",
            dataType: 'json',
            success: function (resposta) {
            this.setState({ lista: resposta });
            }.bind(this)
        });
    }

    setNome(evento) {
        this.setState({ nome: evento.target.value })
    }

    setSenha(evento) {
        this.setState({ senha: evento.target.value })
    }

    setEmail(evento) {
        this.setState({ email: evento.target.value })
    }

    enviaForm(evento) {
        evento.preventDefault()
        $.ajax({
          url: "http://cdc-react.herokuapp.com/api/autores",
          contentType: 'application/json',
          dataType: 'json',
          type: 'post',
          data: JSON.stringify({
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
          }),
          success: ((response) => {
            this.setState({lista: response})
          }).bind(this),
          error: (response) => {
            console.log('erro')
          }
        })
      }
    
    render() {
        return (
            <div id="authorForm">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="content" id="content">
                    <div className="pure-form pure-form-aligned">
                    <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                        <CustomInput id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome:"/>
                        <CustomInput id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email:"/>
                        <CustomInput id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha:"/>
                        <CustomSubmit label="Gravar"/>
                    </form>
                    </div>
                    <TabelaAutores updatedList={this.state.lista}/>
                </div>
            </div>
        )
    } 
}
