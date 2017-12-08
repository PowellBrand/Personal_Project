import React, { Component } from 'react';
import axios from 'axios'


export default class Answer extends Component {


    handleClick(answer) {
        alert(`The answer is: ${answer}`)
    }
    render() {
        return (
            <div>
                <button className="answer-button" onClick={(e) => this.handleClick(this.props.answer)}>Click for Answer</button>

            </div>
        );
    }
}