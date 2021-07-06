import React, {useState} from 'react'
import Person from "./components/Person"

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])

    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                id: persons.length++
            }
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>name:
                    <input value={newName} onChange={handlePersonChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <Person key={person.name} name={person.name}/>)}
            </div>
        </div>
    )
}

export default App