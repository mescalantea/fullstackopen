import React from 'react'

const Person = ({ person, handleDelete }) => {
    const { name, number } = person
    return (<tr><th>{name}</th><td>{number}</td><td><button className="secondary" onClick={() => {
        if (!window.confirm(`Delete ${person.name}?`)) {
            return
        }
        handleDelete(person.id)
    }} >Delete</button></td></tr>)
}
export default Person