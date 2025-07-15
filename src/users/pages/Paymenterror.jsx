import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Paymenterror() {
  return (
    <>
    <Header/>

    <div className="md:grid grid-cols-2 px-40 py-20 flex justify-center items-center">
        <div>
            <h1 className='text-3xl text-red-700'>Sorry ! Your Payment is UnSuccessfull</h1>
            <p className='mt-10'>We Apologize for the inconvience caused and appreciate your visit to bookstore.</p>

            <Link to={'/all-books'}><button className='px-4 py-3 bg-blue-600 text-white mt-10 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'>Explore Book Store</button></Link>
        </div>

        <div>
            <img src="https://cdn.dribbble.com/userupload/23003310/file/original-6396208ee0571627a9e2e9987dcc1974.gif" alt="no image" className='w-3/4 md:ms-50 ms-0'/>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Paymenterror