import {useState} from 'react';
import Statistics from './statistics/Statistics';
import Feedback from './feedback/Feedback';

function Main() {
    const [good, Good] = useState(0);
    const [neutral, Neutral] = useState(0);
    const [bad, Bad] = useState(0);
   
    const addGood = () => {return Good(prev => prev + 1); }


    const addBad = () => {return Bad(prev => prev + 1); }


        const addNeutral = () => {return Neutral(prev => prev + 1); }

   const totalResult = () => {
         return good + neutral + bad;
    }
    const feedbackResult = () => {
        const total = totalResult();
        return Math.round(good/total*100)
    }
    
        return (<section>
            <Feedback addGood={addGood} addNeutral={addNeutral} addBad={addBad} />
            <Statistics good={good} neutral={neutral} bad={bad} total={totalResult()} positiveFeedback={feedbackResult()} />
            </section>
    )
    }


export default Main;