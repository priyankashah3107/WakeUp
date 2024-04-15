import { useContext } from "react";
import { createContext } from "react";

const FireBaseContext = createContext(null)

export const useFirebase = () => useContext(FireBaseContext)

const FirebaseConextProvider = ({children}) => {

    <FireBaseContext.Provider>
      {children}
    </FireBaseContext.Provider>
}


export default FirebaseConextProvider