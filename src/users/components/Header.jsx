import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [clickStatus, setClickStatus] = useState(false)
  return (
    <>

      <div className='p-2 flex justify-between items-center'>
        <div className='flex items-center'>
          <img src="https://openclipart.org/image/800px/275692" alt="book icon" style={{ width: '60px', height: '60px' }} />
          <h1 className='text-xl font-bold md:hidden flex ms-4'>BOOK STORE</h1>

        </div>

        <div className='ms-20'>
          <h1 className='text-3xl font-bold hidden md:flex'>BOOK STORE</h1>
        </div>
        <div className='flex items-center'>

          <div className='md:flex hidden'>
            <FontAwesomeIcon icon={faInstagram} className='mx-2' />
            <FontAwesomeIcon icon={faFacebook} className='mx-2' />
            <FontAwesomeIcon icon={faXTwitter} className='mx-2' />
          </div>


          <div className='md:flex hidden'>

            <Link to={'/login'}>
              <button className='px-4 py-3 ms-5 border border-black rounded cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login
              </button>
            </Link>

          </div>

        </div>
      </div>

      {/* nav bar below contents */}

      <nav className='bg-blue-950 p-3'>

        <div className='flex md:hidden justify-between items-center px-3'>

          <span onClick={() => setClickStatus(!clickStatus)} className='text-white text-2xl'><FontAwesomeIcon icon={faBars} /></span>

          <Link to={'/login'}>
            <button className='px-4 py-3 ms-5 border border-white rounded text-white cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login
            </button>
          </Link>

        </div>

        <ul className={clickStatus ? 'md:flex justify-center text-white' : 'md:flex hidden justify-center text-white me-20 mt-4 md:mt-0'}>
          <Link to={'/'}><li className='px-3'>Home</li></Link>
          <Link to={'/all-books'}><li className='px-3'>Book</li></Link>
          <Link to={'/careers'}><li className='px-3'>Careers</li></Link>
          <Link to={'/contact'}><li className='px-3'>Contact</li></Link>
        </ul>
      </nav>



    </>
  )
}

export default Header