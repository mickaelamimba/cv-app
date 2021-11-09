import React, {createContext, useContext, useState} from "react";

const OpenContext = createContext(undefined)
const OpenContextProvider=({children})=>{
    const[open , setOpen]= useState(false)
    return(
        <OpenContext.Provider value={{
            open,
            handleOpen:()=>{
                setOpen(!open)
            }
        }

        }>
            {children}
        </OpenContext.Provider>
    )

}
const useOpen =()=>{
    const context = useContext(OpenContext)
    if (context === undefined){
        throw new Error('OpenModalContext mus be used within a OpenContextProvider')
    }
    return context
}

export {OpenContextProvider,useOpen}