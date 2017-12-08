import React, { Component } from 'react';
import axios from 'axios'


export default class GetQuestionById extends Component {

    handleChange(value) {
        alert(value)
    }

    render() {
        return (
            <div>
                <input onKeyPress={('enter') => this.handleChange(e.target.value)}></input>
            </div>
        );
    }
}