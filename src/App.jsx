
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Landingpage from './pages/Landingpage'
import Auth from './pages/Auth'
import Allbooks from './users/pages/Allbooks'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Viewbook from './users/pages/Viewbook'
import Profile from './users/pages/Profile'
import Pagenotfound from './pages/Pagenotfound'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'
import Adminhome from './admin/pages/Adminhome'
import Adminbooks from './admin/pages/Adminbooks'
import Admincareers from './admin/pages/Admincareers'
import Adminsettings from './admin/pages/Adminsettings'





function App() {

  // create a state to initially shows the preloader and after a perticular time it will display landing page

  const [isloading, setIsloading] = useState(false)

  useEffect( () => {
    setTimeout( () =>{

    setIsloading(true)

  },7000)
  },[])

  return (
    <>
      <Routes>

        {/* users page path */}

        <Route path='/' element={ isloading ?  <Landingpage /> : <Preloader /> } />

        <Route path='/login' element={ <Auth />} />

        <Route path='/register' element={<Auth register />} />

        <Route path='/all-books' element={<Allbooks />} />

        <Route path='/careers' element={<Careers />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/view-book/:id' element={<Viewbook />} />

        <Route path='/profile' element={<Profile />} />



        {/* path for admin pages */}

        <Route path='/admin-home' element={<Adminhome/>}/>

        <Route path='/admin-books' element={<Adminbooks/>}/>

        <Route path='/admin-careers' element={<Admincareers/>}/>

        <Route path='/admin-settings' element={<Adminsettings/>}/>

        



        <Route path='*' element={<Pagenotfound />} />

      </Routes>

      

    </>
  )
}

export default App
