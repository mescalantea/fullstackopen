import React, { useState } from 'react'
const mock = [
    { name: 'Arto Hellas', number: '040-123456', visible: true },
    { name: 'Ada Lovelace', number: '39-44-5323523', visible: true },
    { name: 'Dan Abramov', number: '12-43-234345', visible: true },
    { name: 'Mary Poppendieck', number: '39-23-6423122', visible: true }
]

const App = () => {
    const [persons, setPersons] = useState(mock)
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
            <h2>Phonebook ☎️</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Number</label>
                    <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <input value={search} onChange={handleSearch} placeholder='🔎 Arto Hellas' className='search' />
            <table><tbody>
                {persons.filter(({ visible }) => visible).map(({ name, number }) => (<tr key={name}><th>{name}</th><td>{number}</td></tr>))}
            </tbody></table>

        </div>
    )
}

export default App