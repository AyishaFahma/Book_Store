import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { allBookApi, approveBookApi, getAllUsersApi } from '../../sevices/allApi'

function Adminbooks() {

  const [bookList, setbookList] = useState(true)

  const [users, setusers] = useState(false)

  const [allBooks, setallBooks] = useState([])

  const [updateStatus, setupdateStatus] = useState([])

  const [allUsers, setallUsers] = useState([])

  // get all books
  const getAllBooks = async() => {
    const result = await allBookApi()
    setallBooks(result.data);
    
  }
  console.log(allBooks);


  // approve book
  const approveBook = async(id)=>{
    const result = await approveBookApi(id)
    console.log(result);
    if(result.status == 200){
      setupdateStatus(result)
    }
    
  }


  // to get all users

  const getAllUsers = async()=>{

    const result = await getAllUsersApi()
    setallUsers(result.data);
    
  }
  console.log(allUsers);
  

  useEffect( ()=>{
    
    if(bookList == true){
      getAllBooks()
    }

    if(users  == true){

      getAllUsers()
    }


  },[updateStatus , users])





  return (
    <>

      <Adminheader />

      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>
        
        <div className='my-10 '>
          <h1 className='text-2xl font-bold text-center'>All Books</h1>

          <div className='flex justify-center items-center text-xl mt-10'>

            <p onClick={() => { setbookList(true); setusers(false) }}
              className={bookList ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Book List</p>

            <p onClick={() => { setbookList(false); setusers(true) }}
              className={users ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Users</p>

          </div>

          {/* booklist conditional rendering sec */}
          {bookList && <div className='py-10 md:px-30 px-5'>

            <div className='md:grid grid-cols-3 gap-x-10'>

              {allBooks?.length > 0 ? 
              allBooks?.map( (item , index)=> (

                <div className={item?.status == 'Sold' ? 'p-5 flex justify-center items-center flex-col md:mb-10 mb-10 shadow-lg/30 opacity-50' : 'p-5 flex justify-center items-center flex-col md:mb-10 mb-10 shadow-lg/30'} key={index}>

                <img src={item?.imageUrl} alt="book image" style={{ width: '100%', height: '300px' }} />

                <h1 className='text-blue-600 mt-5'>{item?.author}</h1>
                <p className='text-xl'>{item?.title.slice(0,20)}...</p>
                <p className='text-amber-600'>{item?.userMail}</p>

                {item?.status == "Pending" && <button type='button' onClick={()=>approveBook(item._id)} className='bg-green-700 w-full p-2 text-white mt-3 hover:bg-green-800'>Approve</button>}

                {item?.status == 'Approved' && <div className='w-full flex justify-end'>
                  <img src="https://marketplace.canva.com/dOO7I/MAF3QmdOO7I/1/tl/canva-check-mark-icon-MAF3QmdOO7I.png" alt="" style={{ width: '40px', height: '40px' }}  />
                </div>}

              </div>

              )) 

              :
              <p>Loading</p>}

            </div>
          </div>}


          {/* users conditional rendering sec */}
          {users && <div className='py-10 md:px-20 px-5'>

            <div className="md:grid grid-cols-3 text-white mb-5">

              {/* users gary color div */}

              {allUsers?.length>0 ? 
              allUsers?.map( (item , index) => (
                <div className='px-5 px-2 bg-slate-300 rounded md:me-5 ' key={index}>
                <h1 className='text-red-500  my-2'>ID: {item?._id}</h1>
                <div className='grid grid-cols-[1fr_3fr] gap-x-5 mb-5'>

                  
                  <div className='flex justify-center items-center'>
                    <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="" style={{width:'70px' , height:'70px'}}/>
                  </div>
                  <div className='text-center'>
                    <h1 className='text-2xl text-blue-700 mb-2'>{item?.username}</h1>
                    <h1 className='text-xl'>{item?.email}</h1>
                  </div>
                </div>
              </div>
              )) 
              :
              <p>Loading</p>
              }


              


              
 
            </div>

            



          </div>}
        </div>
      </div>


      <Footer />

    </>
  )
}

export default Adminbooks