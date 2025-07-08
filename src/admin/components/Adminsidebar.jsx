import { faBagShopping, faBars, faBook, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from '../../users/pages/Profile'
import { serverurl } from '../../sevices/serverurl'
import { adminProfileUpdateStatusContext } from '../../context/Contextshare'

function Adminsidebar() {

    const navigate = useNavigate()
    // to show the blue color on radio according to current page 
    const [homeStatus, sethomeStatus] = useState(false)

    const [bookStatus, setbookStatus] = useState(false)

    const [careerStatus, setcareerStatus] = useState(false)

    const [settingStatus, setsettingStatus] = useState(false)

    const [details, setdetails] = useState({
        profile : "",
        username :""
    })


    const filter = (data) => {

        if (data == 'home') {
            navigate('/admin-home')
        }
        else if (data == 'books') {
            navigate('/admin-books')
        }
        else if (data == 'careers') {
            navigate('/admin-careers')
        }
        else if (data == 'settings') {
            navigate('/admin-settings')
        }
        else {
            navigate('*')
        }

    }


    //context api state ne destructure cheyya
    const {adminProfileUpdateStatus} = useContext(adminProfileUpdateStatusContext)


    //here side bar has profileimage and username
    //it already stored in sessionstorage
    // so if in admin setting edit profile is done then this sidebar details dont automatically upadte coz these are in two component thats why we use contextapi
    useEffect(() => {
        if (sessionStorage.getItem("token")) {

            let user = JSON.parse(sessionStorage.getItem('existingUser'))

            setdetails({profile:user.profile , username:user.username})
        }
    },[adminProfileUpdateStatus])





    useEffect(() => {
        if (location.pathname == '/admin-home') {
            sethomeStatus(true)
        }
        else if (location.pathname == '/admin-books') {
            setbookStatus(true)
        }
        else if (location.pathname == '/admin-careers') {
            setcareerStatus(true)
        }
        else if (location.pathname == '/admin-settings') {
            setsettingStatus(true)
        }

    }, [])


    return (
        <>

            <div className='bg-gray-300 w-full md:h-screen flex items-center flex-col'>
                <div className='my-10'>

                    <img src={details.profile == "" ? "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" : `${serverurl}/imgUpload/${details.profile}`} alt="no image" style={{ width: '170px', height: '170px', borderRadius: '50%' }} />

                </div>
                <h1 className='text-2xl mb-10'>{details.username}</h1>

                <div className='mb-4' onClick={() => filter('home')}  >
                    <input type="radio" id='home' className='me-3' name='path' checked={homeStatus} readOnly />
                    <label htmlFor='home'><FontAwesomeIcon icon={faBars} className='me-3' />Home</label>
                </div>

                <div className='mb-4' onClick={() => filter('books')} >
                    <input type="radio" id='books' className='me-3' name='path' checked={bookStatus} readOnly />
                    <label htmlFor='books'><FontAwesomeIcon icon={faBook} className='me-3' />Books</label>
                </div>

                <div className='mb-4' onClick={() => filter('careers')}  >
                    <input type="radio" id='careers' className='me-5' name='path' checked={careerStatus} readOnly />
                    <label htmlFor='careers'><FontAwesomeIcon icon={faBagShopping} className='me-3' />Careers</label>
                </div>

                <div className='mb-4' onClick={() => filter('settings')}  >
                    <input type="radio" id='settings' className='me-5' name='path' checked={settingStatus} readOnly />
                    <label htmlFor='settings'><FontAwesomeIcon icon={faGear} className='me-3' />Settings</label>
                </div>
            </div>


        </>
    )
}

export default Adminsidebar