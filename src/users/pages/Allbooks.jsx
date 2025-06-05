import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Allbooks() {
  return (
    <>
    <Header/>


    <div>
      <h1 className='my-10 text-center text-3xl'>Collections</h1>

      <div className="md:grid grid-cols-3 mb-10">
        <div></div>
        <div className='flex md:px-0 px-2'>
          <input type="text" placeholder='Search By Book Title' className='bg-white p-2 border border-gray-300 w-full'/>

          <button className='bg-blue-900 px-4 py-3 text-white hover:bg-blue-950'>Search</button>
        </div>
        <div></div>
      </div>

      {/* grid */}

      <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5 mb-30 mt-20">

        {/* first filter grid portion */}
        <div className='md:mb-0 mb-10'>

          <h1 className='font-medium text-2xl my-4'>Filter</h1>

          <div className='my-2 flex'>
            <input type="radio" id='Literary Fiction' name='filter'/>
            <label htmlFor="Literary Fiction" className='ms-3'>Literary Fiction</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Philosophy' name='filter'/>
            <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Romance' name='filter'/>
            <label htmlFor="Romance" className='ms-3'>Romance</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Mystery/Thriller' name='filter'/>
            <label htmlFor="Mystery/Thriller" className='ms-3'>Mystery/Thriller</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Horror' name='filter'/>
            <label htmlFor="Horror" className='ms-3'>Horror</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Auto/Biography' name='filter'/>
            <label htmlFor="Auto/Biography" className='ms-3'>Auto/Biography</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Self-Help' name='filter'/>
            <label htmlFor="Self-Help" className='ms-3'>Self-Help</label>
          </div>

          <div className='my-2 flex'>
            <input type="radio" id='Politics' name='filter'/>
            <label htmlFor="Politics" className='ms-3'>Politics</label>
          </div>

          


        </div>

        {/* second card grid */}

        <div className='md:grid grid-cols-4 gap-x-5'>

          <div className='p-5 flex justify-center items-center flex-col md:mb-0 mb-10 shadow-lg/30'>
            <img src="https://danbrown.com/wp-content/uploads/2024/10/Dan-Brown_DVCYA_book-cover.jpg" alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='text-blue-600 mt-5'>Author</h1>
            <p>Title</p>
            <Link to={'/view-book/1'} className='w-full'><button className='bg-blue-900 w-full p-2 text-white mt-3 hover:bg-blue-950'>View Book</button></Link>
          </div>

          <div className='p-5 flex justify-center items-center flex-col md:mb-0 mb-10 shadow-lg/30'>
            <img src="https://danbrown.com/wp-content/uploads/2024/10/Dan-Brown_DVCYA_book-cover.jpg" alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='text-blue-600 mt-5'>Author</h1>
            <p>Title</p>
            <button className='bg-blue-900 w-full p-2 text-white mt-3 hover:bg-blue-950'>View Book</button>
          </div>

          <div className='p-5 flex justify-center items-center flex-col md:mb-0 mb-10 shadow-lg/30'>
            <img src="https://danbrown.com/wp-content/uploads/2024/10/Dan-Brown_DVCYA_book-cover.jpg" alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='text-blue-600 mt-5'>Author</h1>
            <p>Title</p>
            <button className='bg-blue-900 w-full p-2 text-white mt-3 hover:bg-blue-950'>View Book</button>
          </div>

          <div className='p-5 flex justify-center items-center flex-col md:mb-0 mb-10 shadow-lg/30'>
            <img src="https://danbrown.com/wp-content/uploads/2024/10/Dan-Brown_DVCYA_book-cover.jpg" alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='text-blue-600 mt-5'>Author</h1>
            <p>Title</p>
            <button className='bg-blue-900 w-full p-2 text-white mt-3 hover:bg-blue-950'>View Book</button>
          </div>

        </div>

      </div>
    </div>



    <Footer/>
    </>
  )
}

export default Allbooks