import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const  AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const FirebaseProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user);
    const [loading,setLoading] = useState(true)
    // create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google log in 
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // log out 
    const logOut = ()=>{
        setLoading(true)
         signOut(auth)
        setUser(null)
      
    }

    // observer
    useEffect(()=>{
        const unSubscriber = ()=>{
            return onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
                setLoading(false)
            })
        }
        return ()=>{
            unSubscriber()
        }
    },[])


    const authInfo = {user,createUser,signIn,googleSignIn,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default FirebaseProvider;