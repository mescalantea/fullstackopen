import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-1234567' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
            number: newNumber
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
            <table><tbody>
            {persons.map(({ name, number }) => (<tr key={name}><th>{name}</th><td>{number}</td></tr>))}
                </tbody></table>
           
        </div>
    )
}

export default App