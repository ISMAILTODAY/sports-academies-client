import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, getAuth, updateProfile, } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';





export const AuthProvider = createContext(null)

const AuthContext = ({ children }) => {


    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const auth = getAuth(app);



    // create user for login
    const createUser = (emai, password) => {
        return createUserWithEmailAndPassword(auth, emai, password)
    }
    // login with email and password
    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // LogOut
    const logOut = () => {
        return signOut(auth);

    }



    // objerver

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token
            if (currentUser) {

                axios.post('https://sports-academies-server.vercel.app/jwt', { email: currentUser.email })
                    .then(res => {
                        localStorage.setItem('access-token', res.data.token)
                    })

            }
            else {
                localStorage.removeItem('access-token')
            }

            setLoading(false);



        });
        return () => {
            return unsubscribe();
        }
    }, [auth])


    const profileUpdate = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    const info = {
        createUser,
        signUp,
        signInWithGoogle,
        logOut,
        profileUpdate,
        user,
        loading
    }



    return (
        <AuthProvider.Provider value={info}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;