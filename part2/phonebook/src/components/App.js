import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (e) => {
        if (e.target.value === newName) {
            return
        }
        setNewName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newName) {
            return
        }

        // check if person exists.
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }


        setPersons(persons.concat({
            name: newName
        }))
        setNewName('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(({ name }) => (<p key={name}>{name}</p>))}
        </div>
    )
}

export default App