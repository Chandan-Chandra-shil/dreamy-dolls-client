import  { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.Config';

export  const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
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

  const authInfo = {
    createUser,
    logIn,
    googleLogIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;