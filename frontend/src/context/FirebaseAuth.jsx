import { useContext,createContext  } from "react";
import {app} from '../../firebase'
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup,   } from 'firebase/auth'
import { FaGoogle } from "react-icons/fa6";
const FirebaseContext = createContext(null); 

const auth = getAuth(app)

export const useFirebase = () => useContext(FirebaseContext); 

const provider = new GoogleAuthProvider()


export const FirebaseContextProvider = ({ children }) => {
  
  const createUserWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
  }

  const SignInWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }


  const LoginWithGoogle = () => {
      return signInWithPopup(auth, provider)
  }

  return (
    <>
      
      <FirebaseContext.Provider value={{createUserWithEmail, SignInWithEmail, LoginWithGoogle}}>
        {children}
      </FirebaseContext.Provider>
    </>
  );
};