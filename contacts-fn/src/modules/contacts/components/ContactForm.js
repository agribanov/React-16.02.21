import React, { useState } from 'react';

export default function ContactForm({ contact, onCancel, onSave }) {
    const [state, setState] = useState(contact);

    function onContactFormSubmit(e) {
        e.preventDefault();
        onSave(state);
    }

    function onChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <form action="" className="contact-form" onSubmit={onContactFormSubmit}>
            <h2>Contact Details</h2>
            <label htmlFor="nameInput">Name</label>
            <input
                type="text"
                name="name"
                id="nameInput"
                value={state.name}
                onChange={onChange}
            />
            <br />

            <label htmlFor="surnameInput">Surname</label>
            <input
                type="text"
                name="surname"
                id="surnameInput"
                value={state.surname}
                onChange={onChange}
            />
            <br />

            <label htmlFor="phoneInput">Phone</label>
            <input
                type="text"
                name="phone"
                id="phoneInput"
                value={state.phone}
                onChange={onChange}
            />

            <div className="buttons">
                <button type="submit" className="pull-right">
                    Save
                </button>
                <button type="button" className="pull-left" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}
