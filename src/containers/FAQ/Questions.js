import React from 'react'
import './Questions.css'
import QuestionListElement from '../../components/questionListElement/QuestionListElement'

function Questions() {
    var headings=["Is there any support for your application?","Where do you get the data from?","Where is your office?","Does Life time mean Life time?"];
    var bodies=["Customer support is carried out 24/7, you can also leave a ticket with a problem to our support, during the day the problem will be solved and you can continue to work.",
"We primarily maintain financial data and price data. We compile, clean and standardize all finaicial data and aim to deliver the data and anlytics to our customers by 9:00 AM each morning. For pricing data we rely on NEPSE (we clean this data set too).",
"It is not necessary to go to our office, all problems we can solve in a remote format. But just incase, you can visit us at Gyaneshowr.",
"Life time means the lifetime of the product and any future iterations. We introduced the first digital platform with features that are still unmatched back in 2016. Till date we've maintained and supported the product and will continue to do so in the future as well. Please note that Lifetime members will not have to pay any additional amount each year for our core platform and all the future updates."]
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
