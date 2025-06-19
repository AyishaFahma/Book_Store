import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { loginApi, registerApi } from '../sevices/allApi'

function Auth({ register }) {

  //user details storing state when register
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""

  })

  console.log(userDetails);

  const navigate = useNavigate()

  const handleRegister = async () => {

    // to check all fiels are fill
    // so destructure the value from userdetails state
    const { username, password, email } = userDetails

    if (!username || !password || !email) {
      toast.info('Please fill the form completely')
    }
    else {
      // api call
      const result = await registerApi({ username, password, email }) /* here, the passing req body data should same as backendil registercontrolleril povunna key */
      console.log(result);
      // if register success aneel mongodb atlasil data add avum 200 series response verum

      if (result.status == 200) {
        toast.success("Registration Successfull")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

        navigate('/login')
      }
      // user kodkkunna data already dbyil ndeel ee block work avum
      else if (result.status == 406) {
        toast.warning(result.response.data)
        // so after this message state/input field is cleared
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })

      }
      // server side error
      else {
        toast.error('Something went wrong')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }

    }

  }

  // login button
  const handleLogin = async () => {
    const { email, password } = userDetails

    if (!email || !password) {
      toast.info('Please enter all details')
    }
    else {

      //api calling
      const result = await loginApi({ email, password })
      console.log(result);
      // response 200 seriesilanu server nnu vannethengil athil existing user detailsum token m ndaavm so athine session storageil store cheyyanu

      if (result.status == 200) {

        toast.success('Login Successfull')
        // here ,existingUser keyilekk ee value ne vekkanu
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        // token already string so dont need to apply stringify
        sessionStorage.setItem("token", result.data.token)
        // userdetails ne empty akkanu
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        // after login success home pageilekk move akanam , but here toast kandathinu shesham mathram move ayaal mathi
        setTimeout( () =>{
          navigate('/')
        }, 2005)

      }

      // result not success
      else if(result.status == 403 || result.status == 406){
        toast.warning(result.response.data)
        setUserDetails( {
          username: "",
          email: "",
          password: ""
        })
      }

      else{
        toast.error('Something went wrong')
        setUserDetails( {
          username: "",
          email: "",
          password: ""
        })
      }

    }

  }

  return (
    <>

      {/* login page */}
      <div id='loginpage' className='flex justify-center items-center flex-col'>

        <h1 className='text-4xl font-bold'>BOOK STORE</h1>

        <div className="md:grid grid-cols-3 w-full mt-10">
          <div></div>
          <div className='px-5'>
            <form action="" className='bg-gray-800 p-10 rounded flex justify-center items-center flex-col'>

              <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid white' }} className='flex justify-center items-center text-white'>
                <FontAwesomeIcon icon={faUser} className='fa-2x' />
              </div>

              {register ? <h1 className='text-white text-2xl my-4'>Register</h1> :
                <h1 className='text-white text-2xl my-4'>Login</h1>}



              {register && <div className="mb-3 w-full">
                <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='UserName' className='w-full bg-white rounded p-2' />
              </div>}
              <div className="mb-3 w-full">
                <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="text" placeholder='Email' className='w-full bg-white rounded p-2' />
              </div>
              <div className="mb-3 w-full">
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder='Password' className='w-full bg-white rounded p-2' />
              </div>

              <div className="my-3 w-full">

                {register ? <button type='button' onClick={handleRegister} className='bg-green-700 p-2 w-full rounded text-white hover:bg-green-800 mb-3'>Register</button>

                  :

                  <button type='button' onClick={handleLogin} className='bg-green-700 p-2 w-full rounded text-white hover:bg-green-800'>Login</button>}

              </div>

              {!register && <div>
                <p className='text-white'>---------------- or ----------------</p>

                <div className="my-3 w-full">

                  <button className='bg-white p-2 w-full rounded text-black'>Google Login</button>

                </div>
              </div>}

              <div className="text-white">
                {register ? <p>Are you a Alreary User? <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p>

                  :

                  <p>Are you a New User? <Link to={'/register'} className='text-blue-400 underline'>Register</Link></p>}

              </div>







            </form>
          </div>
          <div></div>
        </div>



      </div>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Auth