import React from 'react';

export default function ContactsListItem({ contact, onSelect, onDelete }) {
    function onDeleteClick(e) {
        e.preventDefault();
        e.stopPropagation();

        onDelete(contact.id);
    }

    return (
        <li className="contact-list-item" onClick={() => onSelect(contact)}>
            {contact.name} {contact.surname} - {contact.phone}
            <a href="" onClick={onDeleteClick}>
                Delete
            </a>
        </li>
    );
}
