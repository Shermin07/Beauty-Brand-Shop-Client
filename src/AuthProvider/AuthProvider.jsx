/* eslint-disable no-unreachable */
import {   createContext, useEffect, useState } from "react";

import app from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword,updateProfile , getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



  export const AuthContext = createContext(null);
 export const auth = getAuth(app);


const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const createUser = (email, password,name,photo) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true);

     }

     const logOut = () =>{
        return signOut(auth)
        setLoading(true);
     }

     const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true);
     }

     useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('User in the auth state changed', currentUser),
            setUser(currentUser);
            setLoading(true);
        })
        return() =>{
            unsubscribe() ;
        }
     },[])



    const authInfo = {
       user,
       createUser,
       logOut,
       signIn,
       loading

    }
    return (
        <div>
            <AuthContext.Provider  value = {authInfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;