import React from 'react';
import List from '../../ui/components/List';
import ContactsListItem from './ContactsListItem';

export default function ContactsList({ contacts, onSelect, onDelete }) {
    return (
        <List onClick={() => console.log('hello')}>
            {contacts.map((contact) => (
                <ContactsListItem
                    contact={contact}
                    key={contact.id}
                    onSelect={onSelect}
                    onDelete={onDelete}
                ></ContactsListItem>
            ))}
        </List>
    );
}
