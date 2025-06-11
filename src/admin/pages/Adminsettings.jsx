import React from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Adminsettings() {
  return (
    <>

      <Adminheader />

      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>

        {/* admin settings contents */}
        <div className='p-4'>
          <h1 className='text-3xl font-semibold text-center my-10'>Settings</h1>
          <div className="md:grid grid-cols-2 ">
            <div className='md:px-10 px-5'>
              <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa neque temporibus odio enim vitae obcaecati optio dignissimos, sint accusantium tenetur ducimus illum incidunt debitis, ratione perferendis consequatur facilis ullam tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At corporis magni repellendus cum officia dolor.</p>

              <p className='text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugiat veritatis nesciunt illum quis corrupti assumenda deserunt vero sequi esse architecto, similique consequatur quod odio dolor! Exercitationem iure odio incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore itaque voluptatibus, suscipit dolorem amet quis consectetur adipisci maxime omnis, quidem minus voluptate minima. Molestiae voluptate illum at saepe laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam optio perspiciatis rerum natus praesentium vitae, vero cupiditate nemo nobis atque libero, quisquam quas tempore. Eaque consectetur amet a tempora incidunt?</p>
            </div>


            <div className='md:px-10 px-5 mt-5 md:mt-0'>
              <form className='bg-blue-200 p-5 rounded'>

                <div className='my-10 flex justify-center items-center'>
                  <label htmlFor="editUserprofile">
                    <input type="file" style={{ display: 'none' }} id='editUserprofile' />
                    <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />

                    <div style={{ marginLeft: '130px', marginTop: '-40px' }}><FontAwesomeIcon icon={faPen} className='p-3 bg-yellow-400 rounded text-white' />
                    </div>
                  </label>
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Username' className='bg-white p-2 w-full  rounded' />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Password' className='bg-white p-2 w-full rounded' />
                </div>

                <div className="mb-3">
                  <input type="text" placeholder='Confirm Password' className='bg-white p-2 w-full rounded' />
                </div>

                <div className="flex justify-between mt-5">
                  <button className='bg-amber-600 text-white p-4 w-1/2 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                  <button className='bg-green-700 text-white p-4 w-1/2 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>




      <Footer />

    </>
  )
}

export default Adminsettings