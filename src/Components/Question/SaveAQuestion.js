import React, { Component } from 'react';
import axios from 'axios'



export default class SaveAQuestion extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         question: '',
    //         answer: '',
    //         id: 0,
    //         title: '',
    //         showAns: false
    //     }
    // }
    saveQ(){
        var saveThisQ = {
            question: '',
            answer: '',
            title: ''
        };
        for( var key in saveThisQ){
            saveThisQ['question'] = this.state.question,
            saveThisQ['answer'] = this.state.answer,
            saveThisQ['title'] = this.state.title
        }
        return saveThisQ;
    }


    render() {
        return (
            <div>
                <button className="saveBtn" onClick={(e)=> this.saveQ()}>Save Question</button>
                
            </div>
        );
    }
}