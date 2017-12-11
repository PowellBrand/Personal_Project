import React, { Component } from 'react';
import axios from 'axios'


export default class GetQuestionById extends Component {

    constructor() {
        super()
        this.state = {
          question: '',
          answer: '',
          id: 0
        }
      }

//Get a question by id.
      getIdQuestion(question) {
        let num = this.state.input || 1;
        var promise = axios.get('http://www.jservice.io/api/category?id='+ num)
        promise.then((response) => {
          console.log(response)
          this.setState({
            question: response.data["0"].question,
            answer: response.data["0"].answer,
            id: response.data["0"].id
          }
          )
    
        })
          .catch(function (error) {
            console.log(error)
    
          });
    
      }
  

    render() {
        return (
            <div>
                <form className="form-text">
                    Enter a number between 1 and 156,800:<br/><input type="number"/>
                    <input onSubmit={(e)=> this.getIdQuestion()} className="submit-button" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}