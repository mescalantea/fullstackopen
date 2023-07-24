import React, { useState } from 'react'
import { personsMock } from '../mocks/persons'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
    const [persons, setPersons] = useState(personsMock)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    const handleNameChange = (e) => {
        if (e.target.value === newName) {
            return
        }
        setNewName(e.target.value)
    }
    const handleNumberChange = (e) => {
        if (e.target.value === newNumber) {
            return
        }
        setNewNumber(e.target.value)
    }

    const isVisible = (name, search) => name.toLowerCase().includes(search.toLowerCase())

    const handleSearch = (e) => {
        if (e.target.value === search) {
            return
        }
        setSearch(e.target.value)
        setPersons(
            persons.map(p => {
                return {
                    ...p,
                    visible: isVisible(p.name, e.target.value)
                }
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newName || !newNumber) {
            alert('Please, fill the form before submit')
            return
        }

        // check if person exists.
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        setPersons(persons.concat({
            name: newName,
            number: newNumber,
            visible: isVisible(newName, search)
        }))
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook <span role='img' aria-label='phone'>☎️</span></h2>
            <PersonForm
                handleSubmit={handleSubmit}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Filter search={search} handleSearch={handleSearch} />
            <Persons persons={persons} />

        </div>
    )
}

export default App