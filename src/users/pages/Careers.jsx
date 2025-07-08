import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLocation, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationApi, getallJobsApi } from '../../sevices/allApi'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Careers() {

  const [modalStatus, setModalStatus] = useState(false)

  //token storing state
  const [token, settoken] = useState("")

  //search key
  const [searchKey, setsearchKey] = useState("")

  //all jobs display cheyyanulla state
  const [allJobs, setallJobs] = useState([])

  //state ctreated for holding apply button modal inputs
  const [applicationDetails, setapplicationDetails] = useState({
    
    jobTitle:"",
    fullname: "",
    qualification: "",
    email: "",
    phone: "",
    coverletter: "",
    resume: ""
  })
  console.log(applicationDetails);

  const navigate = useNavigate()


  //modal opening function
  const openModal = (title)=>{

    setModalStatus(true);
    setapplicationDetails({...applicationDetails,jobTitle:title})
  }


  //reset function
  const handleReset = () => {
    setapplicationDetails({

      fullname: "",
      qualification: "",
      email: "",
      phone: "",
      coverletter: "",
      resume: ""

    })
    //modern browser wont allow to set value to file input box empty derectly so
    document.getElementById("fileinput").value = ""
  }


  //to submit for a job
  const handleAdd = async() => {

    const {fullname,qualification,email,phone,coverletter,resume} = applicationDetails

    if(!token){
      toast.info('Please login to apply!!!')
      navigate('/login')
    }
    else if(!fullname || !qualification || !email || !phone || !coverletter || !resume){
      toast.info('Please fill the form completely')
    }
    else{

      const reqHeader = { 
        "Authorization" :`Bearer ${token}`
      }

      const reqBody = new FormData()

      // here only one resume / or one upload content so directly given

      for(let key in applicationDetails){
        reqBody.append( key , applicationDetails[key])
      }


      const result = await addApplicationApi(reqBody,reqHeader)
      console.log(result);


      if(result.status == 200){
        toast.success('Application Submitted Successfully')
  
      }
      else if (result.status == 406){
        toast.warning(result.response.data)
      }
      else{
        toast.error('Something went wrong')
      }
      handleReset()
      setModalStatus(false)
      
    }


  }



  //to get all jobs added by the admin
  const getAllJobs = async () => {
    const result = await getallJobsApi(searchKey)
    //console.log(result);
    setallJobs(result.data)

  }
  //console.log(allJobs);


  //useeffect for token verification when apply for a job
  useEffect(()=>{
    if(sessionStorage.getItem("token")){

      settoken(sessionStorage.getItem("token"))  
    }
  },[])


  useEffect(() => {
    getAllJobs()
  }, [searchKey])


  return (
    <>

      <Header />

      {/* heading portion */}
      <div className='md:grid grid-cols-[1fr_4fr_1fr]  my-10'>
        <div></div>
        <div className='p-5'>
          <h1 className='text-3xl text-center'>Careers</h1>
          <p className='text-justify mt-5 md:text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta veniam accusamus saepe inventore voluptatum fugiat enim consectetur esse deserunt maxime nesciunt, architecto eius quod repellendus officia! Rem nulla accusantium maiores.</p>
        </div>
        <div></div>
      </div>

      <h1 className='md:ms-20 ms-5 text-2xl my-10'>Current Opening</h1>

      {/* search box */}

      <div className="md:grid grid-cols-3 my-10">
        <div></div>
        <div className='flex md:px-5 px-2'>
          <input onChange={(e) => setsearchKey(e.target.value)} type="text" placeholder='Search By Title' className='bg-white p-2 border border-gray-300 w-full' />

          <button className='bg-green-700 px-4 py-3 text-white hover:bg-green-800'>Search</button>
        </div>
        <div></div>
      </div>

      {/* contents for job openings sec */}
      {allJobs?.length > 0 ?
        allJobs?.map((item) => (
          <div className='md:grid grid-cols-[1fr_4fr_1fr]  my-10 px-4 md:px-0'>
            <div></div>


            <div className='p-5 shadow-lg rounded border border-gray-200'>
              <div className="grid grid-cols-[8fr_1fr]">
                <div>
                  <h1 className='text-xl'>Job Title : {item?.title}</h1>
                  <hr className='border-gray-300 mt-3' />
                </div>

                <div >
                  <button onClick={() => openModal(item?.title)} className='bg-blue-900 px-4 py-2 rounded text-white ms-4'>Apply< FontAwesomeIcon icon={faSquareArrowUpRight} className='ms-1' /></button>
                </div>

              </div>

              <div className='my-4'>

                <h1 className='text-blue-700'>< FontAwesomeIcon icon={faLocation} />Location: {item?.location}</h1>
                <h1 className='mt-3'>Job Type :{item?.jType}</h1>
                <h1 className='mt-3'>Salary : {item?.salary}</h1>
                <h1 className='mt-3'>Qualification :{item?.qualification}</h1>
                <h1 className='mt-3'>Experience : {item?.experience}</h1>
                <h1 className='mt-3 text-justify'>Description : {item?.description}</h1>

              </div>


            </div>


            <div></div>
          </div>
        ))
        :

        <p className='text-2xl text-red-500'>No Openings...</p>}



      {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
              <div className="bg-white">
                {/* modal heading */}

                <div className='bg-blue-950 p-4 text-white flex justify-between items-center'>
                  <p className='text-xl'>Application form</p>
                  < FontAwesomeIcon icon={faXmark} className='fa-2x cursor-pointer' onClick={() => setModalStatus(false)} />
                </div>

                {/* modal body */}
                <div className='p-4'>

                  <div className="md:grid grid-cols-2">
                    <div className='px-2'>

                      <div className='mb-3'>
                        <input value={applicationDetails.fullname} onChange={(e) => setapplicationDetails({ ...applicationDetails, fullname: e.target.value })} type="text" placeholder='Full Name' className='p-2 border border-gray-200 w-full rounded' />
                      </div>

                      <div className='mb-3'>
                        <input value={applicationDetails.email} onChange={(e) => setapplicationDetails({ ...applicationDetails, email: e.target.value })} type="text" placeholder='Email-Id' className='p-2 border border-gray-200 w-full rounded' />
                      </div>

                    </div>

                    <div className='px-2'>

                      <div className='mb-3'>
                        <input value={applicationDetails.qualification} onChange={(e) => setapplicationDetails({ ...applicationDetails, qualification: e.target.value })} type="text" placeholder='Qualification' className='p-2 border border-gray-200 w-full rounded' />
                      </div>

                      <div className='mb-3'>
                        <input value={applicationDetails.phone} onChange={(e) => setapplicationDetails({ ...applicationDetails, phone: e.target.value })} type="text" placeholder='Phone' className='p-2 border border-gray-200 w-full rounded' />
                      </div>

                    </div>
                  </div>


                  <div className='px-2 mb-3'>

                    <textarea value={applicationDetails.coverletter} onChange={(e) => setapplicationDetails({ ...applicationDetails, coverletter: e.target.value })} placeholder='Cover Letter' className='p-2 border border-gray-200 w-full rounded'>
                    </textarea>

                  </div>

                  <div className='px-2 mb-3'>
                    <label htmlFor="" className='mb-2'>Upload resume</label>

                    <input onChange={(e) => setapplicationDetails({ ...applicationDetails, resume: e.target.files[0] })} id='fileinput' type='file' className='border border-gray-200 w-full rounded file:bg-gray-400 file:p-2 file:text-gray-800'
                    />
                  </div>

                </div>

                {/* modal footer */}

                <div className='bg-gray-300 px-4 py-3 sm:flex  sm:flex-row-reverse sm:px-6'>
                  <button type='button' onClick={handleReset} className='inline-flex w-full justify-center bg-orange-500 rounded md:text-xl py-2 px-4 text-white hover:bg-orange-700 sm:ml-3 sm:w-auto'>Reset</button>

                  <button type='button' onClick={handleAdd} className='inline-flex w-full justify-center bg-green-700 rounded md:text-xl py-2 px-4 text-white hover:bg-green-500 sm:w-auto mt-3 sm:mt-0'>Submit</button>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>}

      <Footer />

      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>

    </>
  )
}

export default Careers