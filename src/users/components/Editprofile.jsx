import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Editprofile() {
  return (
    <>

    <button className='px-3 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white text-blue-600'><FontAwesomeIcon icon={faPenToSquare} className='me-1'/>Edit</button>
    
    
    
    </>
  )
}

export default Editprofile