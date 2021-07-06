import React from "react";

const Total = ({parts}) => {
    const total = parts.reduce((summary, part) => summary + part.exercises, 0)
    return (
        <p>total of {total} exercises</p>
    )
}

export default Total