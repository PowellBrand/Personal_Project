import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios'
import GetAQuestion from './Components/Question/GetAQuestion'
import Answer from './Components/Answer/Answer'
import Header from './Components/Header/Header'
// import GetQuestionById from './Components/Question/GetQuestionById'




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
  
  }
  // componentDidMount() {
  //   var promise = axios.get('http://www.jservice.io/api/category?id='+id)
  //   promise.then((response) => {
  //     console.log(response)
  //     this.setState({
  //    id: response.data[id].question
  //     })

  //   })
  //     .catch(function (error) {
  //       console.log(error)

  //     });

  // }


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


