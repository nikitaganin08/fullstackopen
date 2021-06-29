import React, {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = (props) => (
    <div>{props.name} {props.value} {props.symbol}</div>
)

const Statistics = (props) => {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <>
            <Display name="all" value={props.good + props.neutral + props.bad}/>
            <Display name="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
            <Display name="positive" value={props.good * 100 / (props.good + props.neutral + props.bad)} symbol="%"/>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleSetGood = () => {
        return setGood(good + 1);
    }

    const handleSetNeutral = () => {
        return setNeutral(neutral + 1);
    }
    const handleSetBad = () => {
        return setBad(bad + 1);
    }

    return (
        <>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={handleSetGood} text="good"/>
                <Button handleClick={handleSetNeutral} text="neutral"/>
                <Button handleClick={handleSetBad} text="bad"/>
            </div>
            <h1>statistics</h1>
            <Display name="good" value={good}/>
            <Display name="neutral" value={neutral}/>
            <Display name="bad" value={bad}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

export default App