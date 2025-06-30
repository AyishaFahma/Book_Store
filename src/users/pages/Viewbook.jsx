import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { viewBookApi } from '../../sevices/allApi'
import { serverurl } from '../../sevices/serverurl'

function Viewbook() {

  //modal clicking state
  const [modalStatus, setModalStatus] = useState(false)

  const [viewBook, setviewbook] = useState([])


  // when viewbook button click , we get id in the path (browser) , here useparams hook is used to get the id of book
  // pathile parameter access cheyyan useparams use akkam
  const {id} = useParams()
  console.log(id);


  const getViewBookDetails = async(id) => {
    const result = await viewBookApi(id)
    setviewbook(result.data)

  }
  console.log(viewBook);

  useEffect( ()=>{
    getViewBookDetails(id)
  },[])
  
  


  return (
    <>

      < Header />

      <div className='md:grid grid-cols-[2fr_5fr] gap-x-20 md:p-10 p-5 my-15 md:mx-20 mx-5 shadow-lg/30 border border-gray-300'>

        {/* image of book */}

        <div className='mb-10 md:mb-0'>
          <img src={viewBook?.imageUrl} alt="no book image" className='w-full' style={{ height: '500px' }} />
        </div>

        {/* book details main sec */}
        <div>


          {/* eye button icon for modal */}

          <div className='flex items-baseline justify-end '><button onClick={()=>setModalStatus(true)} className='text-2xl text-gray-600 cursor-pointer'><FontAwesomeIcon icon={faEye} /></button></div>


         {/* modal  */}

         { modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                  <div className="bg-white">

                    {/* header of modal */}

                    <div className='bg-blue-950 p-4 text-white flex justify-between items-center'>
                      <p className='text-xl'>Book Photos</p>
                      < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={()=>setModalStatus(false)} />
                    </div>
                    {/* body of modal */}
                    <div className='p-4'>
                      <h1 className='text-blue-500'><FontAwesomeIcon icon={faCamera} className='me-3'/> Camera click of the book in the hand of seller</h1>

                      <div className='md:flex p-5'>
                        {/* uploaded images */}

                        { viewBook?.uploadImages?.map( (item)=> (
                          <img src={`${serverurl}/imgUpload/${item.filename}`} alt="no image" style={{width:'300px' , height:'300px'}} className='mx-2 mb-2 md:mb-0'/>
                        )) }
  
                        
                      </div>

                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>}




          <h1 className='text-center md:text-2xl text-lg font-bold'>{viewBook?.title}</h1>
          <p className='text-center mt-3 text-blue-700'>-{viewBook?.author}-</p>

          {/* grid for inner details of book */}
          <div className="md:grid grid-cols-3 my-15 gap-x-20 ">

            <div >
              <p className='font-[600] mb-4 '>Publisher : {viewBook?.publisher}</p>
              <p className='font-[600] mb-4'>Seller Mail : {viewBook?.userMail}</p>

            </div>
            <div className='font-[600] '>
              <p className='mb-4'>Language : {viewBook?.language}</p>
              <p className='mb-4'>Real Price : $ {viewBook?.price}</p>
            </div>
            <div className='font-[600]'>
              <p className='mb-4'>No. of pages : {viewBook?.noofpages} </p>
              <p className='mb-4'>ISBN: {viewBook?.isbn} </p>
            </div>

          </div>





          {/* last paragraph */}
          <p className='font-[600] text-justify'>{viewBook?.abstract}</p>

          <div className="md:grid grid-cols-3 ">
            <div></div>
            <div></div>
            <div className='mt-20 justify-between flex gap-x-5'>
              <Link to={'/all-books'}><button className='bg-blue-900 rounded text-xl py-2 px-5 text-white hover:bg-blue-700  items-center '><FontAwesomeIcon icon={faBackward} className='me-2 text-xl' />BACK</button></Link>

              <button className='bg-green-700 rounded text-xl py-2 px-5 text-white hover:bg-green-500'>BUY $<span className='ms-2'>{viewBook?.dprice}</span></button>
            </div>
          </div>

        </div>






      </div>

      < Footer />

    </>
  )
}

export default Viewbook