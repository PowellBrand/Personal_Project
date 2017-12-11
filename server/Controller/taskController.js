// var tasks = [{ description: 'walk the dog', competed: false }]
const axios = require ('axios') 
var question =[];
var id = 0;

//create modules to export.
module.exports = {

    getQuestion: (req, res) => {
       res.status(200).send(question);
    },
    saveQuestions: (req, res) => {
        var saveThisQ = {
         question: req.body.question,
         answer: req.body.answer,
         title: req.body.title,
         id: ++id
     };
        question.push(saveThisQ)
        res.send(question)
        
            
    },
    update: (req, res) => {

    },
    complete: (req, res) => {

    },
    delete: (req, res) => {

    },


}