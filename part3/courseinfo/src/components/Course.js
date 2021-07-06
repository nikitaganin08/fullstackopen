import Header from "./Header";
import React from "react";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
    return (
        <div>
            <Header course={props.course}/>
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>
    )
}

export default Course