import React, { useState } from 'react';
import useBoolean from '../../common/hooks/useBoolean';
import useTheme from '../../ui/hooks/useTheme';
import useContacts from '../hooks/useContacts';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';

function getEmptyContact() {
    return {
        name: '',
        surname: '',
        phone: '',
    };
}

export default function Contacts() {
    console.log(useTheme());

    const { list, remove, save } = useContacts();
    const [selectedContact, setSelectedContact] = useState(null);
    const isFormVisible = !!selectedContact;

    function onContactSelect(contact) {
        setSelectedContact(contact);
    }

    function onAddNewBtnClick() {
        setSelectedContact(getEmptyContact());
    }

    function onSave(contact) {
        save(contact);
        closeForm();
    }

    function closeForm() {
        setSelectedContact(null);
    }

    return (
        <>
            {!isFormVisible ? (
                <>
                    <ContactsList
                        contacts={list}
                        onSelect={onContactSelect}
                        onDelete={remove}
                    />
                    <button
                        onClick={onAddNewBtnClick}
                        className="add-new-contact-btn"
                    >
                        Add new
                    </button>
                </>
            ) : (
                <ContactForm
                    contact={selectedContact}
                    onCancel={closeForm}
                    onSave={onSave}
                />
            )}
        </>
    );
}
