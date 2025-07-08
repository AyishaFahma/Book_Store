import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Adminheader() {

  const navigate = useNavigate()


  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    navigate('/')
  }



  return (
    <>

    <nav className='py-3 px-5 flex items-center'>
        <div className='flex items-center'>
            <img src="https://openclipart.org/image/800px/275692" alt="no image"  style={{width:'60px' , height:'60px'}}/>
            <h1 className='md:text-3xl text-xl font-bold flex ms-2'>BOOK STORE</h1>
        </div>

        <div className='ms-auto'>
            <button  type='button' onClick={handleLogout} className='border rounded md:px-4 px-2 py-3'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>
        </div>
    </nav>

    <div className='bg-blue-950 p-2 w-full text-center'>
        <p className='text-white text-base'>Welcome,  Admin!    You're all set to manage and monitor the system. Let’s get to work!</p>
    </div>
    
    </>
  )
}

export default Adminheader