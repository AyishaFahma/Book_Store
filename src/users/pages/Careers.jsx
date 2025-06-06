import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLocation, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {

  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>

      <Header />


      <div className='md:grid grid-cols-[1fr_4fr_1fr]  my-10'>
        <div></div>
        <div className='p-5'>
          <h1 className='text-3xl text-center'>Careers</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta veniam accusamus saepe inventore voluptatum fugiat enim consectetur esse deserunt maxime nesciunt, architecto eius quod repellendus officia! Rem nulla accusantium maiores.</p>
        </div>
        <div></div>
      </div>

      <h1 className='md:ms-20 ms-5 text-2xl my-10'>Current Opening</h1>

      <div className="md:grid grid-cols-3 my-10">
        <div></div>
        <div className='flex md:px-0 px-2'>
          <input type="text" placeholder='Search By Title' className='bg-white p-2 border border-gray-300 w-full' />

          <button className='bg-green-700 px-4 py-3 text-white hover:bg-green-800'>Search</button>
        </div>
        <div></div>
      </div>


      <div className='md:grid grid-cols-[1fr_4fr_1fr]  my-10'>
        <div></div>
        <div className='p-5 shadow-lg rounded border border-gray-200'>
          <div className="md:grid grid-cols-[8fr_1fr]">
            <div>
              <h1 className='text-xl'>Job Title</h1>
              <hr className='border-gray-300 mt-3' />
            </div>

            <div>
              <button onClick={() => setModalStatus(true)} className='bg-blue-900 px-4 py-2 rounded text-white ms-4'>Apply < FontAwesomeIcon icon={faSquareArrowUpRight} className='ms-1' /></button>
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
        <div></div>
      </div>



      {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
              <div className="bg-white">
                {/* modal heading */}

                <div className='bg-blue-950 p-4 text-white flex justify-between items-center'>
                  <p className='text-xl'>Application form</p>
                  < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                </div>
                {/* modal body */}
                <div className='p-4'>

                  <div className="md:grid grid-cols-2">
                    <div className='px-2'>
                      <div className='mb-3'>
                        <input type="text" placeholder='Full Name' className='p-2 border border-gray-200 w-full rounded' />
                      </div>
                      <div className='mb-3'>
                        <input type="text" placeholder='Email-Id' className='p-2 border border-gray-200 w-full rounded' />
                      </div>
                    </div>

                    <div className='px-2'>
                      <div className='mb-3'>
                        <input type="text" placeholder='Qualification' className='p-2 border border-gray-200 w-full rounded' />
                      </div>
                      <div className='mb-3'>
                        <input type="text" placeholder='Phone' className='p-2 border border-gray-200 w-full rounded' />
                      </div>
                    </div>
                  </div>


                  <div className='px-2 mb-3'>
                    <textarea placeholder='Cover Letter' className='p-2 border border-gray-200 w-full rounded'>
                    </textarea>
                  </div>

                  <div className='px-2 mb-3'>
                    <input type='file' placeholder='Phone' className='border border-gray-200 w-full rounded file:bg-gray-300 file:p-2 file:text-gray-600'
                    />
                  </div>

                </div>

                {/* modal footer */}

                <div className='bg-gray-300 px-4 py-3 sm:flex-row-reverse sm:px-6'>
                  <button className='bg-orange-500 rounded text-xl py-2 px-5 text-white hover:bg-orange-700  items-center'>Reset</button>

                  <button className='bg-green-700 rounded text-xl py-2 px-5 text-white hover:bg-green-500'>Submit</button>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>}

      <Footer />

    </>
  )
}

export default Careers