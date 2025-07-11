import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { serverurl } from '../../sevices/serverurl'
import { toast, ToastContainer } from 'react-toastify'
import { editprofileApi } from '../../sevices/allApi'

function Editprofile() {

  const [offCanvasStatus, setOffCanvasStatus] = useState(false)


  //edit profile
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    bio: "",
    profile: ""
  })

  const [existingProfile, setexistingProfile] = useState("")

  const [token, settoken] = useState("")
  console.log(token);

  const [preview, setpreview] = useState("")


  //profile pic upload
  const handleFileUpload = (e) => {

    setuserDetails({ ...userDetails, profile: e.target.files[0] })

    let url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setpreview(url)
  }

  //reset function
  const handleReset = () => {

    if (sessionStorage.getItem("token")) {

      const user = JSON.parse(sessionStorage.getItem("existingUser"))

      setuserDetails({ ...userDetails, username: user.username, password: user.password, confirmpassword: user.password, bio: user.bio })

      setexistingProfile(user.profile)
    }

    setpreview("")

  }

  //submit
  const handleSubmit = async() => {

    const { username, password, confirmpassword, bio } = userDetails

    if (!username || !password || !confirmpassword || !bio) {
      toast.info('Please fill the form Completely')
    }

    else {

      if (password != confirmpassword) {
        toast.warning('Password must match')
      }
      else {

        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }

        if (preview) {

          const reqbody = new FormData()

          for (let key in userDetails){
            if(key != 'confirmpassword'){
              reqbody.append(key , userDetails[key])
            }
          }

          const result = await editprofileApi(reqbody , reqHeader)
          console.log(result);
          

        }
        else {

          const result = await editprofileApi({username , password , profile:existingProfile , bio} , reqHeader)
          console.log(result);


        }
      }
    }
  }



  useEffect(() => {
    if (sessionStorage.getItem("token")) {

      settoken(sessionStorage.getItem("token"))

      const user = JSON.parse(sessionStorage.getItem("existingUser"))

      setuserDetails({ ...userDetails, username: user.username, password: user.password, confirmpassword: user.password, bio: user.bio })

      setexistingProfile(user.profile)



    }
  }, [])





  return (
    <>

      {/* offcanvas code when edit button click */}


      {offCanvasStatus &&
        <div >

          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

          <div className='bg-white h-full w-100 z-50 fixed top-0 left-0 overflow-y-auto'>
            <div className='flex bg-blue-950 p-5 text-white justify-between'>
              <h1 className='text-2xl'>Edit User Profile</h1>
              <FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setOffCanvasStatus(false)} />
            </div>

            <div className='my-10 flex justify-center items-center'>
              <label htmlFor="editUserprofile">
                <input type="file" style={{ display: 'none' }} id='editUserprofile' onChange={(e) => handleFileUpload(e)} />

                {existingProfile == "" ?

                  <img src={preview ? preview : "https://www.pikpng.com/pngl/b/53-531718_free-high-quality-person-icon-icon-clipart.png"} alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />


                  : existingProfile.startsWith('https') ?

                    <img src={preview ? preview : `${existingProfile}`} alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} referrerPolicy='no-referrer' />


                    :

                    <img src={preview ? preview : `${serverurl}/imgUpload/${existingProfile}`} alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />


                }

                <div style={{ marginLeft: '130px', marginTop: '-40px' }}><FontAwesomeIcon icon={faPen} className='p-3 bg-yellow-400 rounded text-white' />
                </div>
              </label>
            </div>

            <div className='px-4'>

              <div className="mb-3">
                <input value={userDetails.username} onChange={(e) => setuserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='bg-white p-2 w-full border border-gray-200  rounded' />
              </div>

              {userDetails.password != 'googlepass' && <div className="mb-3">
                <input value={userDetails.password} onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='Password' className='bg-white p-2 w-full border border-gray-200  rounded' />
              </div>}

              {userDetails.password != 'googlepass' && <div className="mb-3">
                <input value={userDetails.confirmpassword} onChange={(e) => setuserDetails({ ...userDetails, confirmpassword: e.target.value })} type="text" placeholder='Confirm Password' className='bg-white p-2 w-full border border-gray-200  rounded' />
              </div>}

              <div className="mb-3">
                <textarea value={userDetails.bio} onChange={(e) => setuserDetails({ ...userDetails, bio: e.target.value })} placeholder='Bio' className='bg-white p-2 w-full border border-gray-200  rounded' rows={6}></textarea>
              </div>

              <div className="flex justify-end my-5">

                <button type='button' onClick={handleReset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>

                <button type='button' onClick={handleSubmit} className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
              </div>
            </div>


          </div>
        </div>}

      <div className='flex justify-end'>

        <button onClick={() => setOffCanvasStatus(true)} className='px-3 py-2 border border-blue-600 rounded hover:bg-blue-600 hover:text-white text-blue-600 cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} className='me-1' />Edit</button>

      </div>



      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </>
  )
}

export default Editprofile