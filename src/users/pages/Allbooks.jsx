import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { allBooksUserApi } from '../../sevices/allApi'

function Allbooks() {


  const [token, settoken] = useState("")
  const [allBooks, setallBooks] = useState([])

  // to search a book
  const [searchKey, setsearchKey] = useState("")

  // to store initial state of book
   const [tempArray, setTempArray] = useState([])


  const getAllBooks = async (token , searchKey) => {

    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }



    const result = await allBooksUserApi(reqHeader , searchKey)
    setallBooks(result.data)

    //console.log(result);
  }
  //console.log(allBooks);
  console.log(searchKey);
  

  // filter applying function
  
  const filter = (data)=> {

    if(data == 'No filter'){
      setallBooks(tempArray)
    }
    else{
      setallBooks(tempArray.filter( (item) => item.category.toLowerCase() == data.toLowerCase()))
    }

  }



  //when page loads we want to get token for logined user ne book kanan pattullu

  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      const tok = sessionStorage.getItem("token")
      settoken(tok)
      getAllBooks(tok , searchKey)
    }

  }, [ searchKey])


  return (
    <>
      <Header />


      {token ? <div>
        <h1 className='my-10 text-center text-3xl'>Collections</h1>

        <div className="md:grid grid-cols-3 mb-10">
          <div></div>
          <div className='flex md:px-0 px-2'>
            <input onChange={(e)=>setsearchKey(e.target.value)} type="text" placeholder='Search By Book Title' className='bg-white p-2 border border-gray-300 w-full' />

            <button  className='bg-blue-900 px-4 py-3 text-white hover:bg-blue-950'>Search</button>
          </div>
          <div></div>
        </div>

        {/* grid */}

        <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 mb-30 mt-20">

          {/* first filter grid portion */}
          <div className='md:mb-0 mb-10'>

            <h1 className='font-medium text-2xl my-4'>Filter</h1>

            <div className='my-2 flex' onClick={()=>filter('Literary Fiction')}>
              <input type="radio" id='Literary Fiction' name='filter' />
              <label htmlFor="Literary Fiction" className='ms-3'>Literary Fiction</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Philosophy')}>
              <input type="radio" id='Philosophy' name='filter' />
              <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Romance')}>
              <input type="radio" id='Romance' name='filter' />
              <label htmlFor="Romance" className='ms-3'>Romance</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Mystery/Thriller')}>
              <input type="radio" id='Mystery/Thriller' name='filter' />
              <label htmlFor="Mystery/Thriller" className='ms-3'>Mystery/Thriller</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Horror')}>
              <input type="radio" id='Horror' name='filter' />
              <label htmlFor="Horror" className='ms-3'>Horror</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Auto/Biography')}>
              <input type="radio" id='Auto/Biography' name='filter' />
              <label htmlFor="Auto/Biography" className='ms-3'>Auto/Biography</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Self-Help')}>
              <input type="radio" id='Self-Help' name='filter' />
              <label htmlFor="Self-Help" className='ms-3'>Self-Help</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('Politics')}>
              <input type="radio" id='Politics' name='filter' />
              <label htmlFor="Politics" className='ms-3'>Politics</label>
            </div>

            <div className='my-2 flex' onClick={()=>filter('No filter')}>
              <input type="radio" id='No filter' name='filter' />
              <label htmlFor="No filter" className='ms-3'>No filter</label>
            </div>




          </div>

          {/* second card grid */}

          <div className='md:grid grid-cols-4 gap-x-5'>

            {allBooks?.length > 0 ?
             allBooks?.map( (item) => (
            <div className='p-5 flex justify-center items-center flex-col md:mb-5 mb-10 shadow-lg/30'>
              <img src={item?.imageUrl} alt="book image" style={{ width: '100%', height: '300px' }} />

              <h1 className='text-blue-600 mt-5'>{item?.author}</h1>
              <p>{item?.title.slice(0,20)}...</p>
              <Link to={`/view-book/${item?._id}`} className='w-full'><button className='bg-blue-900 w-full p-2 text-white mt-3 hover:bg-blue-950'>View Book</button></Link>
            </div>
            ))

            :
            <p>Loading Content.....</p>
            }

          </div>

        </div>
      </div>
        :
        <div className="md:grid grid cols-3 md:px-10 px-5 my-10  flex justify-center items-center">
          <div></div>
          <div>
            <img src="https://i.gifer.com/5F5d.gif" alt="no image" style={{ width: '100%', height: '400px' }} />
            <h1 className='text-center text-blue-900 text-3xl'>Please <Link to={'/login'} className='text-blue-500 underline'>Login</Link> to Explore More..</h1>
          </div>
          <div></div>
        </div>}



      <Footer />
    </>
  )
}

export default Allbooks