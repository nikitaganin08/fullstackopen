import React from "react";

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to parse data",
                exercises: 7
            },
            {
                name: "State of component",
                exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
            <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
            <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    let result = props.course.parts.reduce((sum, {exercises}) => sum + exercises, 0);
    return (
        <p>Number of exercises {result}</p>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

export default App;
