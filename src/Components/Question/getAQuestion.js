import React, { Component } from 'react'
import axios from 'axios'


export default class GetAQuestion extends Component {

constructor(){
  super()
  this.state = {
    question: '',
    answer:''
  }
}
componentDidMount() {
  var promise = axios.get('http://www.jservice.io/api/random')
  promise.then((response) => {
    console.log(response)
    this.setState({
   question: response.data['0'].question,
  //  answer: response.data['0'].answer
    })

  })
    .catch(function (error) {
      console.log(error)

    });

}
  alertUser() {
    // console.log(question)
    // return question
    var promise = axios.get('http://www.jservice.io/api/random')
    promise.then((response) => {
      console.log(response)
      this.setState({
        question: response.data["0"].question,
        answer: response.data["0"].answer
      }
    )

    })
      .catch(function (error) {
        console.log(error)

      });

  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button className="question-button" onClick={(e) => this.alertUser()}>Click to get a Question</button>
      <p>{this.state.question}</p>
      </div>
    );
  }

}