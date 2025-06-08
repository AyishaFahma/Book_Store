import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>

      <Header />

      <div className='md:grid grid-cols-[1fr_4fr_1fr]  my-10'>
        <div></div>
        <div className='p-5'>
          <h1 className='text-3xl text-center'>Contacts</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta veniam accusamus saepe inventore voluptatum fugiat enim consectetur esse deserunt maxime nesciunt, architecto eius quod repellendus officia! Rem nulla accusantium maiores.</p>
        </div>
        <div></div>
      </div>


      <div className="md:grid grid-cols-3 p-5 gap-x-20 md:mx-20">
        <div className='flex items-center md:justify-center mb-5 md:mb-0'>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='bg-gray-300 flex justify-center'>
            <FontAwesomeIcon icon={faLocationDot} style={{ width: '20px', height: '50px', borderRadius: '50%' }} />
          </div>
          <h1 className='ms-2 text-sm'>123 Main Street, Apt 4B,Anytown, CA 91234</h1>
        </div>

        <div className='flex items-center md:justify-center mb-5 md:mb-0'>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='bg-gray-300 flex justify-center'>
            <FontAwesomeIcon icon={faPhone} style={{ width: '20px', height: '50px', borderRadius: '50%' }} />
          </div>
          <h1 className='ms-2 text-sm'>+91 9874561230</h1>
        </div>

        <div className='flex items-center md:justify-center'>
          <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='bg-gray-300 flex justify-center'>
            <FontAwesomeIcon icon={faEnvelope} style={{ width: '20px', height: '50px', borderRadius: '50%' }} />
          </div>
          <h1 className='ms-2 text-sm'>Bookstore@gmail.com</h1>
        </div>



      </div>


      {/* form and map sec */}

      <div className="md:grid grid-cols-2 md:mx-30 mx-5 my-20 gap-x-30">
        <div className='bg-gray-300 rounded p-5 md:mb-0 mb-10'>

          <h1 className='text-xl text-center mb-8 mt-5'>Send me Message</h1>
          <input type="text" placeholder='Name' className='p-2 bg-white w-full rounded mb-3' />

          <input type="text" placeholder='Email-Id' className='p-2 bg-white w-full rounded mb-3' />

          <textarea placeholder='Message' className='p-2 bg-white w-full rounded mb-3'>
          </textarea>

          <button className='bg-blue-900 w-full p-2 rounded text-white mt-3 hover:bg-blue-950'>Send<FontAwesomeIcon icon={faPaperPlane} className='ms-2'/></button>


        </div>
        {/* map */}
        <div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62651.038623147404!2d76.02719185518288!3d11.061858910676051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1749406636211!5m2!1sen!2sin"  style={{width:'100%', height:'350px'}} allowFullScreen="allowFullScreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

          </div>
        </div>
      </div>






      <Footer />

    </>
  )
}

export default Contact