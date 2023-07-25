import React from 'react'

const PersonForm = ({ newName, newNumber, handleSubmit, handleNameChange, handleNumberChange, loading }) => {
    return (
        <div>
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
                    <button type="submit" disabled={loading}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default PersonForm