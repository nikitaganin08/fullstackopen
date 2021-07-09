import React from "react";

const Persons = ({persons, deletePerson}) => {
    return persons.map(person => {
        return <div key={person.name}>
            {person.name} {person.number}
            <button key={person} onClick={() => deletePerson(person)}>delete</button>
        </div>
    })
}

export default Persons