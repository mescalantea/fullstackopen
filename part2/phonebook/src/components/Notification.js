import React from 'react'

const Notification = ({ message }) => {
    const { text, type, visible } = message

    return (
        <div className={`snackbar ${type}` + (visible ? ' show' : '')}>{text}</div>
    )
}
export default Notification