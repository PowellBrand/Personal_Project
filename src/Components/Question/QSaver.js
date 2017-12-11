import React from 'react'

export default function QSaver({savedArr}){
    return <div className = "saved-questions" >
    Title: {savedArr.title}<br/><br/>
    Question: {savedArr.question}<br/><br/>
    Answer: {savedArr.answer}<br/><br/></div>
}

