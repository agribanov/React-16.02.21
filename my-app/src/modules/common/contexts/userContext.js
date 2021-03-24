import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

export const userContext = createContext({ name: 'Alex' });
userContext.displayName = 'UserContext';

export function useUser() {
    return useContext(userContext);
}

export function useIsLogged() {
    const { isLoggedIn } = useUser();

    return isLoggedIn;
}

export default function UserProvider({ children }) {
    const [user, setUser] = useState({ name: 'Alex' });

    const login = useCallback(() => {
        setUser({ name: 'Alex' });
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const contextValue = useMemo(
        () => ({
            isLoggedIn: !!user,
            user,
            login,
            logout,
        }),
        [user, login, logout]
    );

    return (
        <userContext.Provider value={contextValue}>
            Hello wrold
            {children}
        </userContext.Provider>
    );
}
