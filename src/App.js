import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios'
import GetAQuestion from './Components/Question/GetAQuestion'
// import Answer from './Components/Answer/Answer'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import SaveAQuestion from './Components/Question/SaveAQuestion'
// import GetQuestionById from './Components/Question/GetQuestionById'




class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      question: '',
      answer: ''
    }
  }
  // componentDidMount() {
  //   var promise = axios.get('http://www.jservice.io/api/random')
  //   promise.then((response) => {
  //     console.log(response)
  //     this.setState({
  //       question: response.data["0"].question,
  //       answer: response.data["0"].answer
  //     }
  //     )

  //   })
  //     .catch(function (error) {
  //       console.log(error)

  //     });

  // }
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

  //move below line into the render for it to function.
  // <Answer answer={this.state.answer} />
  // <GetQuestionById question={this.state.question} answer={this.state.answer}/>
// SaveAQuestion is called in the GetAQuestion component.
  // <SaveAQuestion />
  render() {
    return (
      <div>
        <Header />
        <GetAQuestion question={this.state.question} answer={this.state.answer} />
        <Footer />
      </div>
    );
  }
}

export default App;


