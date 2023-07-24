import React from 'react'

const Person = ({ person }) => {
    const { name, number } = person
    return (<tr><th>{name}</th><td>{number}</td></tr>)
}
export default Person