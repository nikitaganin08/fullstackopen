import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons"

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService.getAll()
            .then(initData => setPersons(initData))
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const newPerson = {
                name: newName,
                number: newNumber,
            }
            personService.create(newPerson)
                .then(savedPerson => {
                    setPersons(persons.concat(savedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    const deletePerson = (person) => {
        if (window.confirm(`Delete ${person.name}`)) {
            personService.deletePerson(person.id)
                .catch(() => {
                    alert(`${person.name} was already deleted from server`)
                })
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
        }
    }

    const handlePersonNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePersonPhoneChange = (event) => {
        setNewNumber(event.target.value)
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
                phone={newNumber}
                handleNameChange={handlePersonNameChange}
                handlePhoneChange={handlePersonPhoneChange}/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow} deletePerson={deletePerson}/>
        </div>
    )
}

export default App