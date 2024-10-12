import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth=getAuth(app);

    const CreateUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const LogIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const LogOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const provider=new GoogleAuthProvider();
    const google=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    //state change
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            if(currentUser)
            {
                setUser(currentUser);
                setLoading(false);
            }
        });
        return ()=>{
            return unsubscribe();
        }
    },[auth])
    const AuthInfo = {
      user,
      loading,
      CreateUser,
      LogIn,
      LogOut,
      google,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;