import React from "react";

const PersonForm = (props) => {
    const {add, name, phone, handleNameChange, handlePhoneChange} = props
    return (
        <form onSubmit={add}>
            <div>name: <input value={name} onChange={handleNameChange}/></div>
            <div>number: <input value={phone} onChange={handlePhoneChange}/></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm