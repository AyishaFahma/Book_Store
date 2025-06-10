import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    {/* first portion */}
    <div className='bg-blue-950 p-5 md:p-10 md:grid grid-cols-3 text-white '>

      <div>
        <h1 className='text-2xl'>ABOUT US</h1>
        <p className='mt-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique mollitia est odio quos amet quibusdam ex ducimus, ut provident velit quae a fuga expedita at illum enim, maiores doloremque quis.</p>
      </div>

      <div className='md:flex justify-center mt-10 md:mt-0'>
        <div>
          <h1 className='text-2xl'>NEWS LETTER</h1>
          <p className='mt-3'>Stay updated with our latest trends</p>
          <div className='flex mt-4'>
            <input type="text" placeholder='EMAIL ID' className='bg-white p-2 placeholder:text-gray-500'/>
            <button className='bg-amber-400 py-2 px-3 text-black'><FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
        </div>
      </div>

      <div className='mt-10 md:mt-0'>
        <h1 className='text-2xl'>FOLLOW US</h1>
        <p className='mt-3'>Let us be social</p>
        <div className='flex mt-3'>
          <FontAwesomeIcon icon={faFacebook} className='me-5'/>
          <FontAwesomeIcon icon={faInstagram} className='me-5'/>
          <FontAwesomeIcon icon={faXTwitter} className='me-5' />
          <FontAwesomeIcon icon={faLinkedin}  className='me-5'/>
        </div>
      </div>

      

    </div>

    {/* second below portion */}
    <div className='bg-black p-2 text-center'>
      <p className='text-white' style={{fontSize:'15px'}}>Copyright © 2023 All rights reserved | This website is made with by <span className='text-amber-300'><FontAwesomeIcon icon={faHeart} className='mx-1'/></span>Ayisha Fahma</p>
    </div>
    
    
    
    </>
  )
}

export default Footer