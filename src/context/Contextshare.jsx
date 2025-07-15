import React, { createContext, useState } from 'react'



// careate a context in the outside of component
export const adminProfileUpdateStatusContext = createContext("")

export const userProfileUpdateStatusContext = createContext("")



function Contextshare({children}) {
    
    //data to be shared
    const [adminProfileUpdateStatus, setadminProfileUpdateStatus] = useState({})

    //ee context use cheythitt share cheyyanulla data aanu eth

    const [userProfileUpdateStatus, setuserProfileUpdateStatus] = useState({})

  return (
    <adminProfileUpdateStatusContext.Provider value={ { adminProfileUpdateStatus , setadminProfileUpdateStatus} }>

        <userProfileUpdateStatusContext.Provider value={{userProfileUpdateStatus, setuserProfileUpdateStatus}}>

          {children}
          
        </userProfileUpdateStatusContext.Provider>

    </adminProfileUpdateStatusContext.Provider>
  )
}

export default Contextshare