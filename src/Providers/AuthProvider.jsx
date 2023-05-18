import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.Config';

export  const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

  const [user,setUser] = useState(null)
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }
  const googleProvider = new GoogleAuthProvider()
  const googleLogIn = () => {
   return signInWithPopup(auth,googleProvider)
  }

  const logOut = () => {
  return  signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      
      return () => {
        return unsubscribe();
      }
   })
},[])


  const authInfo = {
    user,
    createUser,
    logIn,
    googleLogIn,
    logOut
  }


  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;