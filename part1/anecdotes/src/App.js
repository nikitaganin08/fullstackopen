import React, {useState} from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoint] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))

    const handleSetSelected = () => {
        return setSelected(Math.floor(Math.random() * anecdotes.length));
    }

    const handleAddPoint = () => {
        const copyPoints = [...points]
        copyPoints[selected] += 1
        return setPoint(copyPoints)
    }

    const arrayMaxIndex = () => {
        return points.indexOf(Math.max(...points))
    }

    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {points[selected].valueOf()} votes</div>
            <Button handleClick={handleAddPoint} text="vote"/>
            <Button handleClick={handleSetSelected} text="next anecdote"/>
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[arrayMaxIndex()]}</div>
        </>
    )
}

export default App