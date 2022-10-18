import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const user = { email: "asdfsfdsf" }
    const authInfo = { user, signUp, logIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;