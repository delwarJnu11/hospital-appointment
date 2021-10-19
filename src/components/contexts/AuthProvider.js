import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
import useServices from '../../hooks/useServices';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allServices = useServices();
    const allAuth = useFirebase();
    const data = { allServices, allAuth }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;