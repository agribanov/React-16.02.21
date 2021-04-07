import React from 'react';

function UserListItem({ item }) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.website}</td>
        </tr>
    );
}

export default UserListItem;
