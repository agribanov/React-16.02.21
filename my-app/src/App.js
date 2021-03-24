import React, { Component, useState } from 'react';
import UserProvider, {
    userContext,
} from './modules/common/contexts/userContext';
import Todos from './modules/todos/components/Todos';

export default function App() {
    return (
        <UserProvider>
            <Todos />
        </UserProvider>
    );
}
