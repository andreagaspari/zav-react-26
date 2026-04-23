import { createContext, useState, useEffect } from "react";
import * as authService from "../services/auth";

export const AuthContext = createContext({
    user: null,
    login: async () => {},
    logout: () => {}
});

export function AuthProvider({children}) {
    const [user, setUser] = useState(authService.getCurrentUser());

    useEffect(() => {
        setUser(authService.getCurrentUser())
    }, []);

    async function login(credentials) {
        const tempUser = await authService.login(credentials);
        if (tempUser) 
            setUser(user);
        return tempUser;
    }

    function logout() {
        setUser(null)
    }

    return (<AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>);
}