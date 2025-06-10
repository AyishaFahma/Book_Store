import React from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'

function Adminbooks() {
  return (
    <>

    <Adminheader/>

    <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
            <Adminsidebar/>
        </div>
        <div>
            admin books
        </div>
    </div>


    <Footer/>
    
    </>
  )
}

export default Adminbooks