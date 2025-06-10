import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Editprofile() {

  const [offCanvasStatus, setOffCanvasStatus] = useState(false)
  return (
    <>

  {/* offcanvas code when edit button click */}


  { offCanvasStatus &&  
  <div >

      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

      <div className='bg-white h-full w-100 z-50 fixed top-0 left-0 overflow-y-auto'>
          <div className='flex bg-blue-950 p-5 text-white justify-between'>
            <h1 className='text-2xl'>Edit User Profile</h1>
            <FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={()=>setOffCanvasStatus(false)} />
          </div>

          <div className='my-10 flex justify-center items-center'>
            <label htmlFor="editUserprofile">
              <input type="file" style={{display:'none'}} id='editUserprofile'/>
              <img src="https://media.istockphoto.com/id/967091776/photo/long-haired-woman-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=gCxvfyl5eDZlYRZlF7IqUGXz2YMxRLsK1_LOFjn4UTo=" alt="no image" style={{width:'200px' , height:'200px' , borderRadius:'50%'}}/>

              <div style={{marginLeft:'130px', marginTop:'-40px'}}><FontAwesomeIcon icon={faPen} className='p-3 bg-yellow-400 rounded text-white'/>
              </div>
            </label>
          </div>

          <div className='px-4'>
            <div className="mb-3">
              <input type="text" placeholder='Username' className='bg-white p-2 w-full border border-gray-200  rounded'/>
            </div>
  
            <div className="mb-3">
              <input type="text" placeholder='Password' className='bg-white p-2 w-full border border-gray-200  rounded'/>
            </div>
  
            <div className="mb-3">
              <input type="text" placeholder='Confirm Password' className='bg-white p-2 w-full border border-gray-200  rounded'/>
            </div>
  
            <div className="mb-3">
              <textarea placeholder='Bio' className='bg-white p-2 w-full border border-gray-200  rounded' rows={6}></textarea>
            </div>
  
            <div className="flex justify-end my-5">
                <button className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                <button className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
            </div>
          </div>


      </div>
  </div>}

  <div className='flex justify-end'>

    <button onClick={() => setOffCanvasStatus(true)} className='px-3 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white text-blue-600 cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} className='me-1' />Edit</button>

  </div>

    



    </>
  )
}

export default Editprofile