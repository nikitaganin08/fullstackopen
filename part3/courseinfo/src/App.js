import React from 'react';

const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
}

const Content = ({course}) => {
    return (
        course.parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
        ))
    )
}

function Course(props) {
    return (
        <div>
            <Header course={props.course}/>
            <Content course={props.course}/>
        </div>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>
}

export default App
