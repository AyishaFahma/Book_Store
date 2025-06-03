
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





function App() {

  return (
    <>
      <Routes>

        {/* users page path */}
        <Route path='/' element={<Landingpage />} />

        <Route path='/login' element={ <Auth />} />

        <Route path='/register' element={<Auth />} />

        <Route path='/all-books' element={<Allbooks />} />

        <Route path='/careers' element={<Careers />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/view-book/:id' element={<Viewbook />} />

        <Route path='/profile' element={<Profile />} />












        <Route path='*' element={<Pagenotfound />} />

      </Routes>

    </>
  )
}

export default App
