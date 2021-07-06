import React from 'react'
import './Questions.css'
import QuestionListElement from '../../components/questionListElement/QuestionListElement'

function Questions() {
    var headings=["What technical support do you provide for your application?","Where do you get your data from?","Where is your office?","What does lifetime offer mean?"];
    var bodies=["Customer support is provided throughout the day. You can submit your issue with our  representatives who will assist you in solving the issue.","We provide publicly available data that is curated by our data team. Company financial data is based on corporate announcements and price data is obtained from Nepal Stock Exchange (NEPSE) website.","Our office is in Gyaneshwar, Kathmandu. However, currently, we dispense our services remotely.","Lifetime offer means the lifetime of the product including all future core iterations. This is a limited time promotional offer."];
     return (
        <div className="questions" id="questions">
            <div className="questions-wrapper" id="faq">FAQ</div>
            {headings.map((head, index)=>(
                <QuestionListElement header={head} body={bodies[index]}/>    
            ))
            }

            
        </div>
    )
}

export default Questions
