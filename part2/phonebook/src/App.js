import React, {useState} from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '040-123456'},
        {name: 'Ada Lovelace', phone: '39-44-5323523'},
        {name: 'Dan Abramov', phone: '12-43-234345'},
        {name: 'Mary Poppendieck', phone: '39-23-6423122'}
    ])

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [filter, setFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                phone: newPhone,
                id: persons.length++
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewPhone('')
        }
    }

    const handlePersonNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePersonPhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filter} onChange={handleFilter}/>
            <h2>add a new </h2>
            <PersonForm
                add={addPerson}
                name={newName}
                phone={newPhone}
                handleNameChange={handlePersonNameChange}
                handlePhoneChange={handlePersonPhoneChange}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App