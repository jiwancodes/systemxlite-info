import React from 'react'
import './QuestionListElement.css'
 
function QuestionListElement({header,body}) {
    return (
        <div className="list-container">
            {/* <div className="list-wrapper"> */}
            <div className="question-header">{header}</div>
            <div className="question-spacer"></div>
            <div className="question-body">{body}</div>
            {/* </div> */}
        </div>
    )
}

export default QuestionListElement
