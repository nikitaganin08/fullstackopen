import React, {useEffect, useState} from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons"
import Notification from "./components/Notification";

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notification, setNotification] = useState(null)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personService.getAll()
            .then(initData => setPersons(initData))
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const existedPerson = persons.find(p => p.name === newName)
        if (existedPerson) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const changedPerson = {...existedPerson, number: newNumber}
                personService.update(existedPerson.id, changedPerson)
                    .then(savedPerson => {
                        setPersons(persons.map(person => person.id !== existedPerson.id ? person : savedPerson))
                        addNotification(`Update number of ${savedPerson.name}`)
                    })
            }
        } else {
            const newPerson = {
                name: newName,
                number: newNumber,
            }
            personService.create(newPerson)
                .then(savedPerson => {
                    setPersons(persons.concat(savedPerson))
                    addNotification(`Added ${savedPerson.name}`)
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    const addNotification = (props) => {
        setNotification(props)
        setTimeout(() => setNotification(null), 3000)
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
            <Notification message={notification}/>
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