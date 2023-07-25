import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const isVisible = (name, search) => name.toLowerCase().includes(search.toLowerCase())

    // fetch persons from REST API
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL)
            .then((response) => {
                // append visible attribute.
                setPersons(
                    response.data.map(p => {
                        return { ...p, visible: isVisible(p.name, search) }
                    })
                )
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

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

        const newPerson = {
            id: persons.length + 1,
            name: newName,
            number: newNumber,
            visible: isVisible(newName, search)
        }

        setLoading(true)
        axios
            .post(process.env.REACT_APP_API_URL, newPerson)
            .then(response => {

                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')

            })
            .catch(e => {
                console.error(e);
                alert(e)
            })
            .finally(() => setLoading(false))
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
                loading={loading}
            />
            <h2>Numbers</h2>
            <Filter search={search} handleSearch={handleSearch} />
            <Persons persons={persons} />

        </div>
    )
}

export default App