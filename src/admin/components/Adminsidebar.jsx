import { faBagShopping, faBars, faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Adminsidebar() {
  return (
    <>

    <div className='bg-gray-300 w-full h-screen flex items-center flex-col'>
        <div className='my-10'>
            <img src="https://media.istockphoto.com/id/967091776/photo/long-haired-woman-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=gCxvfyl5eDZlYRZlF7IqUGXz2YMxRLsK1_LOFjn4UTo=" alt="no image" style={{width:'170px' , height:'170px' , borderRadius:'50%'}}/>
        </div>
        <h1 className='text-2xl mb-10'>UserName</h1>

        <div className='mb-4'>
            <input type="radio" id='home' className='me-3' name='path'/>
            <label htmlFor='home'><FontAwesomeIcon icon={faBars} className='me-3'/>Home</label>
        </div>

        <div className='mb-4'>
            <input type="radio" id='home' className='me-3' name='path'/>
            <label htmlFor='home'><FontAwesomeIcon icon={faBook} className='me-3'/>Books</label>
        </div>

        <div className='mb-4'>
            <input type="radio" id='home' className='me-3' name='path'/>
            <label htmlFor='home'><FontAwesomeIcon icon={faBagShopping} className='me-3'/>Careers</label>
        </div>

        <div className='mb-4'>
            <input type="radio" id='home' className='me-3' name='path'/>
            <label htmlFor='home'><FontAwesomeIcon icon={faGear} className='me-3'/>Settings</label>
        </div>
    </div>
    
    
    </>
  )
}

export default Adminsidebar