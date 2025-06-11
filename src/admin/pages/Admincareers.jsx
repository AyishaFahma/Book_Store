import React, { useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSquareArrowUpRight, faTrash } from '@fortawesome/free-solid-svg-icons'

function Admincareers() {

  const [jobPost, setjobPost] = useState(true)
  const [viewApplicant, setviewApplicant] = useState(false)
  return (
    <>

      <Adminheader />

      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>

        <div className='my-10'>
          <h1 className='text-2xl font-bold text-center'>Careers</h1>

          <div className='flex justify-center items-center text-xl mt-10'>

            <p onClick={() => { setjobPost(true); setviewApplicant(false) }}
              className={jobPost ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Job Post</p>

            <p onClick={() => { setviewApplicant(true); setjobPost(false) }}
              className={viewApplicant ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >View Applicant</p>

          </div>

          <div className="md:grid grid-cols-3 my-10">
            <div className='md:mx-10 px-2 w-full'>
              {/* input box field */}
              <div className='flex '>
                <input type="text" placeholder='Job Title' className='bg-white p-2 border border-gray-300 w-full' />

                <button className='bg-green-700 px-4 py-3 text-white hover:bg-green-800'>Search</button>
              </div>
            </div>
            <div></div>
            <div className='flex md:justify-end md:items-end items-center justify-center md:me-10 my-5'>
              {/* apply job button */}
              <button className='hover:border hover:border-blue-600 px-4 py-3 hover:text-blue-600 hover:bg-white bg-blue-600 text-white'>Add Job</button>
            </div>

          </div>


          {/* conditional rendering for job post */}
          {jobPost &&
            <div className='md:grid grid-cols-[4fr] my-10 px-4 md:px-10'>
              

              <div className='p-5 shadow-lg rounded border border-gray-200'>
                <div className="grid grid-cols-[8fr_1fr]">
                  <div>
                    <h1 className='text-xl'>Job Title</h1>
                    <hr className='border-gray-300 mt-3' />
                  </div>

                  <div >
                    <button onClick={() => setModalStatus(true)} className='bg-red-700 px-4 py-2 rounded text-white ms-4'>Delete< FontAwesomeIcon icon={faTrash} className='ms-1' /></button>
                  </div>

                </div>

                <div className='my-4'>

                  <h1 className='text-blue-700'>< FontAwesomeIcon icon={faLocation} />Location</h1>
                  <h1 className='mt-3'>Job Type :</h1>
                  <h1 className='mt-3'>Salary :</h1>
                  <h1 className='mt-3'>Qualification :</h1>
                  <h1 className='mt-3'>Experience :</h1>
                  <h1 className='mt-3 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iusto. Quasi fuga vel deserunt at ea error illum dicta itaque facere, odit magnam eligendi. Fuga vitae expedita non cumque aspernatur.</h1>

                </div>


              </div>
              
            </div>}

          {/* conditional rendering for view applicant */}
          {viewApplicant && <div className='md:grid grid-cols-[4fr] my-10 px-4 md:px-10 overflow-x-auto'>
  <table className='table-auto min-w-full border border-blue-400'>

    <thead>
      <tr className='bg-blue-500 text-white'>
        <th className='border border-blue-300 px-4 py-2'>SI:NO</th>
        <th className='border border-blue-300 px-4 py-2'>Job Title</th>
        <th className='border border-blue-300 px-4 py-2'>Name</th>
        <th className='border border-blue-300 px-4 py-2'>Qualification</th>
        <th className='border border-blue-300 px-4 py-2'>Email</th>
        <th className='border border-blue-300 px-4 py-2'>Phone</th>
        <th className='border border-blue-300 px-4 py-2'>Cover Letter</th>
        <th className='border border-blue-300 px-4 py-2'>Resume</th>
      </tr>
    </thead>

    <tbody>
      {/* table row */}
      
      <tr className='hover:bg-blue-50'>
        <td className='border border-blue-200 px-4 py-2 text-center'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
        <td className='border border-blue-200 px-4 py-2'></td>
      </tr>
      
    </tbody>
  </table>
</div>
}

        </div>
      </div>


      <Footer />
    </>
  )
}

export default Admincareers