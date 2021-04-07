import { useContext } from 'react';
import themeContext from '../contexts/themeContext';

export default function useTheme() {
    const value = useContext(themeContext);

    if (value === null) {
        console.log('You should use useTheme only inside ThemeProvider');
    }

    return value;
}
