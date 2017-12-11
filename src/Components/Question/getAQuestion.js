import React, { Component } from 'react'
import axios from 'axios'
import SaveAQuestion from './SaveAQuestion'
// import QTracker from './QTracker'


export default class GetAQuestion extends Component {

  constructor() {
    super()
    this.state = {
      question: '',
      answer: '',
      title: '',
      showAns: false
    }
  }
  // componentDidMount() {
  //   var promise = axios.get('http://www.jservice.io/api/random')
  //   promise.then((response) => {
  //     console.log(response)
  //     this.setState({
  //       question: response.data['0'].question,
  //       //  answer: response.data['0'].answer
  //     })

  //   })
  //     .catch(function (error) {
  //       console.log(error)

  //     });

  // }

  // btnClick(){
  //   var count = 0;
  //   count++; 
  //   return count;  
  // }

  //Working question block
  alertUser(question) {
    this.state.question;
    var promise = axios.get('http://www.jservice.io/api/random')
    promise.then((response) => {
      console.log(response)
      this.setState({
        question: response.data["0"].question,
        answer: response.data["0"].answer,
        title: response.data["0"].category.title,
        showAns: false
      }
      )

    })
      .catch(function (error) {
        console.log(error)

      });

  }
  //--------------------------------

  //Semi-working answer 
  handleClick(answer) {
    this.state.answer;
    this.setState({
      showAns: true
    })
  }
  //----------------------------------
  render() {
    function btnClick(){
        var count = 0;
        if(document.getElementById(''))
        count++; 
        return count;  
      }

    console.log(this.props)
    return (
      // question block starts
      <div className="q-div">
        <button className="question-button" onClick={(e) => this.alertUser()}>Click to get a Question</button>
        <section className="q-section">
          <p className="q-p">{this.state.question}</p>
        </section>

        {/* Display id */}
        <div className="id-indicator">
          <p className="id-p">Category: {this.state.title}</p>
        </div>

        {/* answer block starts */}
        <div className="a-div">
          <button className="answer-button" onClick={(e) => this.handleClick(this.state.answer).btnClick()}>Click for Answer</button>
          
          <section className="a-section">           
            <p className={this.state.showAns ? "ans-p ans-dis-on": "ans-p ans-dis-off"}>{this.state.answer}</p>
          </section>
          <SaveAQuestion question={this.state.question} answer={this.state.answer} title ={this.state.title}/>
        </div>


      </div>

    );
  }

}