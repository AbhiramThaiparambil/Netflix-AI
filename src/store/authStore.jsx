import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider=({children})=>{
    const [authUser,setAuthUser]=useState(null)
     return(
        <UserContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </UserContext.Provider>
    
     )
}

export default UserProvider



