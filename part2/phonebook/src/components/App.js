import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import { getAll, isVisible, add, remove, update } from '../services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    // fetch persons from REST API
    useEffect(() => {
        getAll()
            .then(data => {
                // append visible attribute.
                setPersons(
                    data.map(p => {
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

        let person = persons.find(p => p.name === newName)
        setLoading(true)

        const handleError = e => {
            console.error(e);
            alert(e)
        }
        const handleDone = () => setLoading(false)

        // check if person exists.
        if (person) {
            if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                setLoading(false)
                return
            }
            person = { ...person, number: newNumber }
            update(person)
                .then(data => {
                    setPersons(persons.map(p => p.id === data.id ? data : p))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(handleError)
                .finally(handleDone)
        } else {
            person = {
                id: persons.length + 1,
                name: newName,
                number: newNumber,
                visible: isVisible(newName, search)
            }
            add(person)
                .then(data => {
                    setPersons(persons.concat(data))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(handleError)
                .finally(handleDone)
        }
    }

    const handleDelete = id => {
        setLoading(true)
        remove(id)
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            })
            .catch(e => {
                console.error(e);
                alert(`Error deleting person with ID: ${id}`)
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
            <Persons persons={persons} handleDelete={handleDelete} />

        </div>
    )
}

export default App