import React from 'react'
import Person from "./Person"

const Persons = ({ persons }) => {
    return (
        <table>
            <tbody>
                {
                    persons.filter(({ visible }) => visible)
                        .map((person) => (<Person key={person.id} person={person} />) )
                }
            </tbody>
        </table>
    )
}
export default Persons