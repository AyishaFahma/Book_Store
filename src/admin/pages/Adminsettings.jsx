import React, {  useContext, useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { serverurl } from '../../sevices/serverurl'
import { toast, ToastContainer } from 'react-toastify'
import { editprofileApi } from '../../sevices/allApi'
import { adminProfileUpdateStatusContext } from '../../context/Contextshare'

function Adminsettings() {

  //token
  const [token, settoken] = useState("")

  //admin details
  const [AdminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    profile: ""
  })

  //to hold url of profile img
  const [preview, setpreview] = useState("")

  const [existingProfile, setexistingProfile] = useState("")

  console.log(AdminDetails);

  //context api part
  // state ne update cheyyanullath
  const {setadminProfileUpdateStatus} = useContext(adminProfileUpdateStatusContext)


  const handlefileUpload = (e) => {
    setAdminDetails({ ...AdminDetails, profile: e.target.files[0] })

    if (e.target.files[0] != "") {
      const url = URL.createObjectURL(e.target.files[0])
      console.log(url);

      setpreview(url)
    }
  }

  console.log(preview);


  //reset function
  const handleReset = () => {

    if (sessionStorage.getItem("token")) {
      let tok = sessionStorage.getItem("token")
      settoken(tok)

      let user = JSON.parse(sessionStorage.getItem('existingUser'))

      setAdminDetails({ ...AdminDetails, username: user.username, password: user.password, confirmPassword: user.password })

      setexistingProfile(user.profile)
    }

    setpreview("")

  }

  //submit button
  const handleSubmit = async() => {
    const { username, password, confirmPassword } = AdminDetails

    if (!username || !password || !confirmPassword) {

      toast.info('Pease fill the form completely')
    }
    else {

      if (password != confirmPassword) {
        toast.warning('Password must match')
      }
      else {

        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }

        if (preview) {

          const reqbody = new FormData()

          for (let key in AdminDetails) {

            if (key != 'confirmPassword') { // confirm password is not send to backend
              reqbody.append(key, AdminDetails[key])
            }
          }
          //bio stateil illathath kondanu seperate pass cheythu
          reqbody.append("bio", "")


          const result = await editprofileApi(reqbody, reqHeader)
          console.log(result);

          if(result.status == 200){
            toast.success('Profile Updated Successfully')
            sessionStorage.setItem("existingUser" , JSON.stringify(result.data))
            setadminProfileUpdateStatus(result)
          }
          else{
            toast.error('Something went wrong')
          }


        }
        else {

          const result = await editprofileApi({ username, password, profile: existingProfile, bio: "" }, reqHeader)
          console.log(result);

          if(result.status == 200){
            toast.success('Profile Updated Successfully')
            sessionStorage.setItem("existingUser" , JSON.stringify(result.data))
            setadminProfileUpdateStatus(result)
          }
          else{
            toast.error('Something went wrong')
          }

        }
      }

    }

  }




  useEffect(() => {

    if (sessionStorage.getItem("token")) {
      let tok = sessionStorage.getItem("token")
      settoken(tok)
      let user = JSON.parse(sessionStorage.getItem('existingUser'))

      setAdminDetails({ ...AdminDetails, username: user.username, password: user.password, confirmPassword: user.password })

      setexistingProfile(user.profile)
    }
  }, [])

  return (
    <>

      <Adminheader />

      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>

        {/* admin settings contents */}
        <div className='p-4'>
          <h1 className='text-3xl font-semibold text-center my-10'>Settings</h1>
          <div className="md:grid grid-cols-2 ">
            <div className='md:px-10 px-5'>
              <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa neque temporibus odio enim vitae obcaecati optio dignissimos, sint accusantium tenetur ducimus illum incidunt debitis, ratione perferendis consequatur facilis ullam tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At corporis magni repellendus cum officia dolor.</p>

              <p className='text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugiat veritatis nesciunt illum quis corrupti assumenda deserunt vero sequi esse architecto, similique consequatur quod odio dolor! Exercitationem iure odio incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore itaque voluptatibus, suscipit dolorem amet quis consectetur adipisci maxime omnis, quidem minus voluptate minima. Molestiae voluptate illum at saepe laborum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam optio perspiciatis rerum natus praesentium vitae, vero cupiditate nemo nobis atque libero, quisquam quas tempore. Eaque consectetur amet a tempora incidunt?</p>
            </div>


            <div className='md:px-10 px-5 mt-5 md:mt-0'>
              <form className='bg-blue-200 p-5 rounded'>

                <div className='my-10 flex justify-center items-center'>
                  <label htmlFor="editUserprofile">

                    <input type="file" style={{ display: 'none' }} id='editUserprofile' onChange={(e) => handlefileUpload(e)} />

                    {existingProfile == "" ? <img src={preview ? preview : "https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"} alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />

                      :

                      <img src={preview ? preview : `${serverurl}/imgUpload/${existingProfile}`} alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />}



                    <div style={{ marginLeft: '130px', marginTop: '-40px' }}><FontAwesomeIcon icon={faPen} className='p-3 bg-yellow-400 rounded text-white' />
                    </div>
                  </label>
                </div>

                <div className="mb-3">
                  <input type="text" value={AdminDetails?.username} onChange={(e) => setAdminDetails({ ...AdminDetails, username: e.target.value })} placeholder='Username' className='bg-white p-2 w-full  rounded' />
                </div>

                <div className="mb-3">
                  <input type="text" value={AdminDetails?.password} onChange={(e) => setAdminDetails({ ...AdminDetails, password: e.target.value })} placeholder='Password' className='bg-white p-2 w-full rounded' />
                </div>

                <div className="mb-3">
                  <input type="text" value={AdminDetails?.confirmPassword} onChange={(e) => setAdminDetails({ ...AdminDetails, confirmPassword: e.target.value })} placeholder='Confirm Password' className='bg-white p-2 w-full rounded' />
                </div>

                <div className="flex justify-between mt-5">

                  <button type='button' onClick={handleReset} className='bg-amber-600 text-white p-4 w-1/2 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>

                  <button type='button' onClick={handleSubmit} className='bg-green-700 text-white p-4 w-1/2 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>




      <Footer />

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </>
  )
}

export default Adminsettings