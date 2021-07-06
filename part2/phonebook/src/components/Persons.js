import React from "react";

const Persons = ({persons}) => {
    return persons.map(person => {
        return <div key={person.name}>{person.name} {person.phone}</div>
    })
}

export default Persons