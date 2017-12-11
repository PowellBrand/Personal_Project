import React, { Component } from 'react';
import axios from 'axios'


export default class Answer extends Component {

    constructor(){
        super()
        this.state={
            question: '',
            answer: ''
        }
    }

    //handle for button click
    handleClick(answer){
        this.props.answer(this.state.answer);
    }
    // handleClick(answer) {
    //     var promise = axios.get('http://www.jservice.io/api/random')
    //     promise.then((response)=>{
    //         console.log(response)
    //         this.setState({
    //             question: response.data["0"].question,
    //             answer: response.data["0"].answer
    //         })
    //     })
        
        
    // }

    render() {
        return (
            <div className="a-div">
                <button className="answer-button" onClick={(e) => this.handleClick(this.props.answer)}>Click for Answer</button>
                <section className="a-section">
                <p className="ans-p">{this.state.answer}</p>
                </section>
            </div>
        );
    }
}