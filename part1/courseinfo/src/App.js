import React from "react";

const App = () => {
    const course = "Half Stack application development";
    const parts = [
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
        },
    ];

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    let result = props.parts.reduce((sum, {exercises}) => sum + exercises, 0);
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