import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios'
import GetAQuestion from './Components/Question/GetAQuestion'
import Answer from './Components/Answer/Answer'
import Header from './Components/Header/Header'




class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      question: '',
      answer: ''
    }
  }
  componentDidMount() {
    var promise = axios.get('http://www.jservice.io/api/random')
    promise.then((response) => {
      console.log(response)
      this.setState({
        id: response.data.id,
        question: response.data["0"].question,
        answer: response.data["0"].answer
      })

    })
      .catch(function (error) {
        console.log(error)

      });

  }


  render() {
    return (
      <div>
        <Header />
        <GetAQuestion question={this.state.question} />
        <Answer answer={this.state.answer} />
      </div>
    );
  }
}

export default App;


