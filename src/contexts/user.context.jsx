import { createContext, useState, useEffect, useCallback} from "react";

import { createUserDocumentFromAuth,onAuthStateChangedListner, } from "../utils/firebase.utils";


export const UserContext= createContext({
    currentUser:null,
    setCurrentUser:()=>null
})

export const UserProvider=({ children })=>{
     const [currentUser, setCurrentUser] = useState(null);
     const value={ currentUser, setCurrentUser}




useEffect(()=>{
   const unsubscribe= onAuthStateChangedListner((user)=>{
    if (user ){
    createUserDocumentFromAuth(user);
    }
    setCurrentUser(user);
    console.log(user);
   })

   return unsubscribe
},[])

    return <UserContext.Provider value={value}>{children}</ UserContext.Provider>
}

   