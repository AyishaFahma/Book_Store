import React, { createContext, useState } from 'react'



// careate a context in the outside of component
export const adminProfileUpdateStatusContext = createContext("")



function Contextshare({children}) {
    
    //data to be shared
    const [adminProfileUpdateStatus, setadminProfileUpdateStatus] = useState({})

  return (
    <adminProfileUpdateStatusContext.Provider value={ { adminProfileUpdateStatus , setadminProfileUpdateStatus} }>
        {children}
    </adminProfileUpdateStatusContext.Provider>
  )
}

export default Contextshare