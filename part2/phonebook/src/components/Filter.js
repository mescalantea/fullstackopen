import React from 'react'

const Filter = ({ search, handleSearch }) => {
    return (
        <input value={search} onChange={handleSearch} placeholder='🔎 Arto Hellas' />
    )
}
export default Filter