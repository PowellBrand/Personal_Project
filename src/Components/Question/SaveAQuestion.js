import React, { Component } from 'react';
import axios from 'axios'
import GetAQuestion from './GetAQuestion'
import QSaver from './QSaver'



export default class SaveAQuestion extends Component {

    constructor() {
        super()
        this.state = {
         savedArr: []
        }
    }
    saveQ() {
        var saveThisQ = {
            question: this.props.question,
            answer: this.props.answer,
            title: this.props.title
        };
        axios.post('/api/saveQuestions', saveThisQ)
        var savedArr = [];
        this.setState({
        savedArr: [...this.state.savedArr, saveThisQ]
    })

        return savedArr;
    }
    
    
    render() {
        const savedQs = this.state.savedArr.map((savedArr, i) => {
        return <QSaver key={i} savedArr={savedArr}/>
        })

        return (
            <div>
                <button className="saveBtn" onClick={(e) => this.saveQ()}>Save Question</button>
                <section className="saved-q-section">
                    {savedQs}
                </section>
            </div>
        );
    }
}