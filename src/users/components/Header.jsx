import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPerson, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const [clickStatus, setClickStatus] = useState(false)

  const [dropdownStatus, setdropDownStatus] = useState(false)
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

            {/* <Link to={'/login'}>
              <button className='px-4 py-3 ms-5 border border-black rounded cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login
              </button>
            </Link> */}

            {/* dropdown button */}
            <div className="relative inline-block text-left">
              <div>
                <button onClick={()=>setdropDownStatus(!dropdownStatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " id="menu-button" aria-expanded="true" aria-haspopup="true">

                  <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" style={{width:'70px' , height:'50px'}}/>
                  
                  
                </button>
              </div>


              { dropdownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">

                  <Link to={'/profile'}><a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faUser} className='me-2'/>Profile</a></Link>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> < FontAwesomeIcon icon={faPowerOff} className='me-1'/> Logout</a>

                  
                </div>
              </div>
              }
            </div>

            {/* end of dropdown button */}

          </div>

        </div>
      </div>

      {/* nav bar below contents for small screens */}

      <nav className='bg-blue-950 p-3'>

        <div className='flex md:hidden justify-between items-center px-3'>

          <span onClick={() => setClickStatus(!clickStatus)} className='text-white text-2xl'><FontAwesomeIcon icon={faBars} /></span>

          {/* <Link to={'/login'}>
            <button className='px-4 py-3 ms-5 border border-white rounded text-white cursor-pointer'><FontAwesomeIcon icon={faUser} className='me-2' />Login
            </button>
          </Link> */}

          {/* dropdown button */}
            <div className="relative inline-block text-left">
              <div>
                <button onClick={()=>setdropDownStatus(!dropdownStatus)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs " id="menu-button" aria-expanded="true" aria-haspopup="true">

                  <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="" style={{width:'70px' , height:'50px'}}/>
                  
                  
                </button>
              </div>


              { dropdownStatus && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">

                  <Link to={'/profile'}><a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"><FontAwesomeIcon icon={faUser} className='me-2'/>Profile</a></Link>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0"> < FontAwesomeIcon icon={faPowerOff} className='me-1'/> Logout</a>

                  
                </div>
              </div>
              }
            </div>

            {/* end of dropdown button */}

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