import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Paymentsuccess() {
  return (
    <>
    <Header/>

    <div className="md:grid grid-cols-2 px-40 py-20 flex justify-center items-center">
        <div>
            <h1 className='text-5xl text-blue-700'>Congratulations</h1>
            <p className='mt-10'>Thankyou for shopping with Bookstore. Hope ypu have a good time with us</p>

            <Link to={'/all-books'}><button className='px-4 py-3 bg-blue-600 text-white mt-10 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600'>Explore Book Store</button></Link>
        </div>

        <div>
            <img src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="no image" className='w-3/4'/>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Paymentsuccess