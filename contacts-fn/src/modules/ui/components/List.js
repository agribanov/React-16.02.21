import React from 'react';
import useTheme from '../hooks/useTheme';

export default function List({ children, ...props }) {
    const { theme, THEMES } = useTheme();
    const styles = {
        backgroundColor: theme === THEMES.DARK ? 'black' : 'whilte',
    };

    return (
        <ul style={styles} {...props}>
            {children}
        </ul>
    );
}
