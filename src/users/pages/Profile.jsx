import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import Editprofile from '../components/Editprofile'

function Profile() {

  const [sellStatus, setSellStatus] = useState(true)

  const [bookStatus, setBookStatus] = useState(false)

  const [purchaseStatus, setPurchaseStatus] = useState(false)


  return (
    <>

      <Header />

      <div className='bg-blue-950' style={{ height: '200px' }}></div>
      {/* profile round part */}
      <div style={{ width: '180px', height: '180px', borderRadius: '50%', marginTop: '-130px', marginLeft: '70px' }} className='p-3 flex justify-center items-center bg-white'>
        <img src="https://media.istockphoto.com/id/967091776/photo/long-haired-woman-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=gCxvfyl5eDZlYRZlF7IqUGXz2YMxRLsK1_LOFjn4UTo=" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>

      <div className="flex justify-between my-5 px-5 md:px-20">
        <div className='flex justify-center items-center'>
          <h1 className='md:text-3xl text-2xl'>Ayisha Fahma  <FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 ms-3 mt-2' /></h1>

        </div>

        {/* edit profile button */}

        <Editprofile />
      </div>

      <p className='md:px-20 px-5 my-5 text-lg text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt suscipit ut ad, temporibus quis cumque voluptas dignissimos doloribus aperiam? Excepturi totam nulla omnis quas dolores quos voluptatum ratione fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti expedita ullam, id eius hic pariatur alias. Explicabo cumque laborum, dolore, earum doloremque, at enim dolores aliquam minus deserunt fugit nisi?</p>

      <div className='md:px-40 px-5'>


        {/* full tabs div */}
        <div className='flex justify-center items-center text-xl'>

          <p onClick={() => { setSellStatus(true); setBookStatus(false); setPurchaseStatus(false) }}
            className={sellStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Sell Book</p>

          <p onClick={() => { setSellStatus(false); setBookStatus(true); setPurchaseStatus(false) }}
            className={bookStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Book Status</p>

          <p onClick={() => { setSellStatus(false); setBookStatus(false); setPurchaseStatus(true) }}
            className={purchaseStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Purchase History</p>

        </div>


        {/* sell books div */}

        {sellStatus && <div className='md:p-10 mt-5'>
          <div className='bg-gray-200 md:p-10 p-3 rounded'>
            <h1 className='text-3xl font-medium text-center'>Book Details</h1>

            <div className="md:grid grid-cols-2 gap-x-5">
              <div className='my-10'>
                <div className="mb-3">
                  <input type="text" placeholder='Title' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Author' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='No of Pages' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Image Url' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Price' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Discount Price' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <textarea placeholder='Abstract' rows={'8'} className='p-2 bg-white rounded w-full outline-0'></textarea>
                </div>
              </div>


              <div className='my-10 px-2'>

                <div className="mb-3">
                  <input type="text" placeholder='Publisher' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Language' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='ISBN' className='p-2 bg-white rounded w-full outline-0' />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Category' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className='flex justify-center items-center mt-10 flex-col'>
                  <label htmlFor="uploadBookImg">
                    <input type="file" id='uploadBookImg' style={{ display: 'none' }} />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                  </label>

                  {/* uploaded book images max 3 */}

                  <div className='mt-10 flex items-center'>
                    <img src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-db636e27--Books23_1200x.jpg?v=1620061505" alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />

                    <img src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-db636e27--Books23_1200x.jpg?v=1620061505" alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />

                    <img src="https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-db636e27--Books23_1200x.jpg?v=1620061505" alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />


                    <label htmlFor="uploadBookImg">
                      <input type="file" id='uploadBookImg' style={{ display: 'none' }} />

                      <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg/30 bg-gray-300 border border-gray-300 ms-4 cursor-pointer'/>
                      
                    </label>

                    


                  </div>
                </div>




              </div>
            </div>

            <div className="flex justify-end ">
              <button className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
              <button className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
            </div>

          </div>
        </div>}

        {/* book status div */}

        {bookStatus && <div className='shadow-lg/30 rounded py-8 md:px-5 px-2 my-5 border-gray-200 border'>
          {/* one book details/content */}
          <div className='bg-gray-200 p-5 rounded mb-5'>
            {/* book details part */}
            <div className="md:grid grid-cols-[5fr_2fr] gap-x-5">

              <div >
                <h1 className='text-2xl'>Harry Potter </h1>
                <p className='text-lg mb-3'>Jk Rowling</p>
                <p className='text-blue-600'>$ <span>20</span></p>

                <p className='mt-2 text-medium text-justify md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum itaque illo porro libero veritatis quam nam, accusantium ullam maxime corporis perferendis vitae explicabo aut facere ea? Consequuntur, dolores debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nulla, eius velit qui reprehenderit explicabo repellendus provident, earum totam rem quos non, omnis deserunt doloribus laborum aut autem nobis illo!</p>
              </div>

              <div>
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2016/10/57ee5c3a7c9988201038142a_418243985.jpg" alt="no image" style={{ width: '300px', height: '300px' }} />
              </div>

            </div>

            <div className="flex justify-between items-center w-full ">
              {/* soldout image */}
              <div >
                <img src="https://png.pngtree.com/png-clipart/20230423/ourmid/pngtree-sold-rubber-stamp-png-image_6718966.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              {/* delete button */}
              <div >
                <button className='px-4 py-2 text-white bg-red-600 rounded hover:bg-white hover:text-red-700 hover:border hover:border-red-700'>Delete</button>
              </div>
            </div>
          </div>

          {/* next book details here */}


          
          {/* if no book added */}
          <div className='flex justify-center items-center flex-col'>
            <img src="https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png" alt="no image" style={{width:'200px', height:'200px'}} />
            <p className='text-red-500 mt-5'>No Book Brought...</p>
          </div>



        </div>}



        {/* purchase history */}

        {purchaseStatus && <div className='shadow-lg/30 border-gray-200 border rounded py-8 md:px-5 px-2 my-5'>
          {/* one book details/content */}
          <div className='bg-gray-200 p-5 rounded mb-5'>
            {/* book details part */}
            <div className="md:grid grid-cols-[5fr_2fr] gap-x-5">

              <div >
                <h1 className='text-2xl'>Harry Potter </h1>
                <p className='text-lg mb-3'>Jk Rowling</p>
                <p className='text-blue-600'>$ <span>20</span></p>

                <p className='mt-2 text-medium text-justify md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum itaque illo porro libero veritatis quam nam, accusantium ullam maxime corporis perferendis vitae explicabo aut facere ea? Consequuntur, dolores debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nulla, eius velit qui reprehenderit explicabo repellendus provident, earum totam rem quos non, omnis deserunt doloribus laborum aut autem nobis illo!</p>
              </div>

              <div>
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2016/10/57ee5c3a7c9988201038142a_418243985.jpg" alt="no image" style={{ width: '300px', height: '300px' }} />
              </div>

            </div>

            <div className="flex justify-between items-center w-full ">
              {/* soldout image */}
              <div >
                <img src="https://png.pngtree.com/png-clipart/20230423/ourmid/pngtree-sold-rubber-stamp-png-image_6718966.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
            </div>

          </div>

          {/* next book details here */}



          {/* if no book added */}

          <div className='flex justify-center items-center flex-col'>
            <img src="https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png" alt="no image" style={{width:'200px', height:'200px'}} />
            <p className='text-red-500 mt-5'>No Book Brought...</p>
          </div>





        </div>}


      </div>









      <Footer />


    </>
  )
}

export default Profile