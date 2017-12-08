import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios'






class App extends Component {
constructor(){
  super()
  this.state = {
    question: '',
    answer: ''
  }
}


componentDidMount(){
  var promise = axios.get('http://www.jservice.io/api/random')
  promise.then((response)=> {
    console.log(response)
    this.setState({
      question: response.data.question    
    })   
    
  })
  .catch(function (error) {
    console.log(error)
    
  });

}

  render() {
    return (
      <div className = "body">
     
        
      </div>
    );
  }
}

export default App;


