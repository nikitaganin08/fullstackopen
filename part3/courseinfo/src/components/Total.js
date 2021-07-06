import React from "react";

const Total = ({parts}) => {
    const total = parts.reduce((summary, part) => summary + part.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total