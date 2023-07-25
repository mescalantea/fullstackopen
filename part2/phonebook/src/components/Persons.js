import React from 'react'
import Person from "./Person"

const Persons = ({ persons, handleDelete }) => {
    return (
        <table>
            <tbody>
                {
                    persons.filter(({ visible }) => visible)
                        .map((person) => (<Person key={person.id} person={person} handleDelete={handleDelete} />) )
                }
            </tbody>
        </table>
    )
}
export default Persons