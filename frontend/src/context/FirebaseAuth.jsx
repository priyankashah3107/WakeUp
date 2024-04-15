import { useContext,createContext  } from "react";
import {app} from '../../firebase'
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth'

const FirebaseContext = createContext(null); 

const auth = getAuth(app)

export const useFirebase = () => useContext(FirebaseContext); 

export const FirebaseContextProvider = ({ children }) => {
  
  const createUserWithEmail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
  }

  const SignInWithEmail = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }


  return (
    <>
      
      <FirebaseContext.Provider value={{createUserWithEmail, SignInWithEmail}}>
        {children}
      </FirebaseContext.Provider>
    </>
  );
};