import { useContext,createContext, useEffect, useState  } from "react";
import {app} from '../../firebase'
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup, onAuthStateChanged  } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa6";
const FirebaseContext = createContext(null); 

const auth = getAuth(app)

export const useFirebase = () => useContext(FirebaseContext); 

const provider = new GoogleAuthProvider()
 

export const FirebaseContextProvider = ({ children }) => {

  // checking for onAuthState 
  const [user, setUser] = useState('')
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user) setUser(user)
        else setUser(null)
      })
   }, [])
  
  const createUserWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
  }

  const SignInWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }


  const LoginWithGoogle = () => {
      return signInWithPopup(auth, provider)
  }

    const isLoggin = user ? true : false;

  return (
    <>
      
      <FirebaseContext.Provider value={{createUserWithEmail, SignInWithEmail, LoginWithGoogle, isLoggin}}>
        {children}
      </FirebaseContext.Provider>
    </>
  );
};