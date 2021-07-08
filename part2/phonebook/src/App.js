import React, {useState, useEffect} from 'react'
import Persons from "./components/Persons"
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        console.log("effect")
        axios.get('http://localhost:3001/persons')
            .then(response => {
                console.log("promise fulfilled")
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, "persons")

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
                id: persons.length++
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
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
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App