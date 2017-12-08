import React, { Component } from 'react'
import axios from 'axios'


export default class GetAQuestion extends Component {


  alertUser(question) {
    alert(`Your question is: ${question}`)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button className="question-button" onClick={(e) => this.alertUser(this.props.question)}>Click to get a Question</button>

      </div>
    );
  }

}