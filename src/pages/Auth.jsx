import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <>

      {/* login page */}
      <div id='loginpage' className='flex justify-center items-center flex-col'>

        <h1 className='text-4xl font-bold'>BOOK STORE</h1>

        <div className="md:grid grid-cols-3 w-full mt-10">
          <div></div>
          <div className='px-5'>
            <form action="" className='bg-gray-800 p-10 rounded flex justify-center items-center flex-col'>

              <div style={{width:'70px' , height:'70px' , borderRadius:'50%' , border:'1px solid white'}} className='flex justify-center items-center text-white'>
                <FontAwesomeIcon icon={faUser} className='fa-2x'/>
              </div>

              { register ? <h1 className='text-white text-2xl my-4'>Register</h1> :
              <h1 className='text-white text-2xl my-4'>Login</h1>}
              


              {register && <div className="mb-3 w-full">
                <input type="text" placeholder='UserName' className='w-full bg-white rounded p-2'/>
              </div>}
              <div className="mb-3 w-full">
                <input type="text" placeholder='Email' className='w-full bg-white rounded p-2'/>
              </div>
              <div className="mb-3 w-full">
                <input type="password" placeholder='Password' className='w-full bg-white rounded p-2'/>
              </div>

              <div className="my-3 w-full">

                { register? <button className='bg-green-700 p-2 w-full rounded text-white hover:bg-green-800 mb-3'>Register</button>

                :

                <button className='bg-green-700 p-2 w-full rounded text-white hover:bg-green-800'>Login</button> }

              </div>

              { !register && <div>
                <p className='text-white'>---------------- or ----------------</p>
  
                <div className="my-3 w-full">
  
                  <button className='bg-white p-2 w-full rounded text-black'>Google Login</button>
  
                </div>
              </div>}

              <div className="text-white">
                { register? <p>Are you a Alreary User? <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p> 

                :

                <p>Are you a New User? <Link to={'/register'} className='text-blue-400 underline'>Register</Link></p> }

              </div>







            </form>
          </div>
          <div></div>
        </div>



      </div>



    </>
  )
}

export default Auth