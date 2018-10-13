import React, { Component } from 'react';

export class CustomInput extends Component {

    constructor() {
        super()
    }

    render() {
        return (
        <div className="pure-control-group">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <input id={this.props.id} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
        </div>    
        )
    }
};

export class CustomSubmit extends Component {

    constructor() {
        super()
    }

    render() {
        return (
        <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">{this.props.label}</button>
          </div>  
        )
    }
}