import React from 'react';
import useTheme from '../hooks/useTheme';

export default function ThemeToggler() {
    const { setTheme, THEMES } = useTheme();
    function toggle() {
        setTheme(THEMES.DARK);
    }

    return <button onClick={toggle}>Toggle</button>;
}
