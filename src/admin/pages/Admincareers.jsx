import React, { useEffect, useState } from 'react'
import Adminheader from '../components/Adminheader'
import Footer from '../../components/Footer'
import Adminsidebar from '../components/Adminsidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSquareArrowUpRight, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addJobApi, getAllApplicationApi, getallJobsApi, removeJobApi } from '../../sevices/allApi'
import { serverurl } from '../../sevices/serverurl'
import { Link } from 'react-router-dom'

function Admincareers() {

  const [jobPost, setjobPost] = useState(true)
  const [viewApplicant, setviewApplicant] = useState(false)

  const [modalStatus, setModalStatus] = useState(false)

  const [allJob, setallJob] = useState([])

  const [addStatus, setaddStatus] = useState([])

  //for searching job
  const [searchKey, setsearchKey] = useState("")

  //state for holding delete job 
  const [deleteStatus, setdeleteStatus] = useState({})

  //state for holding all applications of user
  const [applications, setApplications] = useState([])


  // state for add job modal input data
  const [jobDetails, setjobDetails] = useState({

    title: "",
    location: "",
    jType: "",
    salary: "",
    qualification: "",
    experience: "",
    description: ""

  })
  //console.log(jobDetails);

  // function to add job when button click
  const handleAddJob = async () => {
    const { title, location, jType, salary, qualification, experience, description } = jobDetails

    //console.log(title, location, jType, salary, qualification, experience, description);

    if (!title || !location || !jType || !salary || !qualification || !experience || !description) {

      toast.info('Please fill the Form Completely')
    }
    else {

      const result = await addJobApi(jobDetails)
      //console.log(result);

      if(result.status == 200){
        toast.success('Job Added Successfully')
        handleReset()
        setModalStatus(false)
        setaddStatus(result)
      }
      else if(result.status == 401){
        toast.warning(result.response.data)
        handleReset()
      }
      else{
        toast.error('Something went wrong')
        handleReset()
        setModalStatus(false)
      }

    }
  }

  // function to reset the values
  const handleReset = () => {
    setjobDetails({
      title: "",
      location: "",
      jType: "",
      salary: "",
      qualification: "",
      experience: "",
      description: ""
    })
  }


  //get all jobs
  const getAllJobs = async(searchKey)=>{
    const result = await getallJobsApi(searchKey)
    setallJob(result.data);
     
  }
  console.log(allJob);
  // console.log('alljobs are');

  //delete job function
  const handleDeleteJob = async(id)=>{

    const result = await removeJobApi(id)
    console.log(result);

    if(result.status == 200){
        setdeleteStatus(result)
    }
    else{
      toast.error('Something went wrong')
    }
  }
  

  //get all application of user

  const getallApplications = async()=>{

    const result = await getAllApplicationApi()
    //console.log(result);

    if(result.status == 200){
      setApplications(result.data)
    }
     
  }
  console.log(applications);
  

  useEffect( ()=>{
    getAllJobs(searchKey)

    if(viewApplicant == true){
      getallApplications()
    }

  },[addStatus , searchKey , deleteStatus , viewApplicant])



  return (
    <>

      <Adminheader />

      <div className="md:grid grid-cols-[1fr_5fr]">
        <div>
          <Adminsidebar />
        </div>

        <div className='my-10'>
          <h1 className='text-2xl font-bold text-center'>Careers</h1>

          <div className='flex justify-center items-center text-xl mt-10'>

            <p onClick={() => { setjobPost(true); setviewApplicant(false) }}
              className={jobPost ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Job Post</p>

            <p onClick={() => { setviewApplicant(true); setjobPost(false) }}
              className={viewApplicant ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >View Applicant</p>

          </div>

          <div className="md:grid grid-cols-3 my-10">
            <div className='md:mx-10 px-2 w-full'>
              {/* input box field */}
              <div className='flex '>
                <input onChange={(e)=>setsearchKey(e.target.value)} type="text" placeholder='Job Title' className='bg-white p-2 border border-gray-300 w-full' />

                <button className='bg-green-700 px-4 py-3 text-white hover:bg-green-800'>Search</button>
              </div>
            </div>
            <div></div>
            <div className='flex md:justify-end md:items-end items-center justify-center md:me-10 my-5'>
              {/* apply job button */}
              <button onClick={() => setModalStatus(true)} className='hover:border hover:border-blue-600 px-4 py-3 hover:text-blue-600 hover:bg-white bg-blue-600 text-white'>Add Job</button>
            </div>

          </div>


          {/* conditional rendering for job post */}
          {jobPost &&
            <div className='md:grid grid-cols-[4fr] my-10 px-4 md:px-10'>


               
              {allJob?.length > 0 ? 
              allJob?.map( (item , index) => (
                <div className='p-5 shadow-lg rounded border border-gray-200' key={index}>
                <div className="grid grid-cols-[8fr_1fr]">
                  <div>
                    <h1 className='text-xl'>Job Title : {item?.title}</h1>
                    <hr className='border-gray-300 mt-3' />
                  </div>

                  <div >
                    <button type='button' onClick={()=>handleDeleteJob(item._id)} className='bg-red-700 px-4 py-2 rounded text-white ms-4'>Delete< FontAwesomeIcon icon={faTrash} className='ms-1' /></button>
                  </div>

                </div>

                <div className='my-4'>

                  <h1 className='text-blue-700'>< FontAwesomeIcon icon={faLocation} />Location : {item?.location}</h1>
                  <h1 className='mt-3'>Job Type : {item?.jType}</h1>
                  <h1 className='mt-3'>Salary : {item?.salary}</h1>
                  <h1 className='mt-3'>Qualification :{item?.qualification}</h1>
                  <h1 className='mt-3'>Experience : {item?.experience}</h1>
                  <h1 className='mt-3 text-justify'>Description : {item?.description}</h1>

                </div>


              </div>
              )) 
              :
              <p>No Job Added yet</p>}

            </div>}



          {/* modal */}
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

                      <div className='px-2'>

                        <div className='mb-3'>
                          <input value={jobDetails.title} onChange={(e) => setjobDetails({ ...jobDetails, title: e.target.value })} type="text" placeholder='Title' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <input value={jobDetails.location} onChange={(e) => setjobDetails({ ...jobDetails, location: e.target.value })} type="text" placeholder='Location' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <input value={jobDetails.jType} onChange={(e) => setjobDetails({ ...jobDetails, jType: e.target.value })} type="text" placeholder='Job Type' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <input type="text" value={jobDetails.salary} onChange={(e) => setjobDetails({ ...jobDetails, salary: e.target.value })} placeholder='Salary' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <input value={jobDetails.qualification} onChange={(e) => setjobDetails({ ...jobDetails, qualification: e.target.value })} type="text" placeholder='Qualification' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <input value={jobDetails.experience} onChange={(e) => setjobDetails({ ...jobDetails, experience: e.target.value })} type="text" placeholder='Experience' className='p-2 border border-gray-200 w-full rounded' />
                        </div>

                        <div className='mb-3'>
                          <textarea value={jobDetails.description} onChange={(e) => setjobDetails({ ...jobDetails, description: e.target.value })} placeholder='Description' className='p-2 border border-gray-200 w-full rounded'>
                          </textarea>
                        </div>

                      </div>

                    </div>

                    {/* modal footer */}

                    <div className='bg-gray-300 px-4 py-3 sm:flex  sm:flex-row-reverse sm:px-6'>
                      <button type='button' onClick={handleReset} className='inline-flex w-full justify-center bg-orange-500 rounded md:text-xl py-2 px-4 text-white hover:bg-orange-700 sm:ml-3 sm:w-auto'>Reset</button>

                      <button type='button' onClick={handleAddJob} className='inline-flex w-full justify-center bg-green-700 rounded md:text-xl py-2 px-4 text-white hover:bg-green-500 sm:w-auto mt-3 sm:mt-0'>ADD</button>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>}


          {/* conditional rendering for view applicant */}
          {viewApplicant && <div className='md:grid grid-cols-[4fr] my-10 px-4 md:px-10 overflow-x-auto'>

            {applications?.length > 0 ?<table className='table-auto min-w-full border border-blue-400'>

              <thead>
                <tr className='bg-blue-500 text-white'>
                  <th className='border border-blue-300 px-4 py-2'>SI:NO</th>
                  <th className='border border-blue-300 px-4 py-2'>Job Title</th>
                  <th className='border border-blue-300 px-4 py-2'>Name</th>
                  <th className='border border-blue-300 px-4 py-2'>Qualification</th>
                  <th className='border border-blue-300 px-4 py-2'>Email</th>
                  <th className='border border-blue-300 px-4 py-2'>Phone</th>
                  <th className='border border-blue-300 px-4 py-2'>Cover Letter</th>
                  <th className='border border-blue-300 px-4 py-2'>Resume</th>
                </tr>
              </thead>

              <tbody>
                {/* table row */}

                { applications?.map((item , index)=> (
                  <tr className='hover:bg-blue-50' key={index}>

                  <td className='border border-blue-200 px-4 py-2 text-center'>{index + 1}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.jobTitle}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.name}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.qualification}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.email}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.phone}</td>
                  <td className='border border-blue-200 px-4 py-2'>{item?.coverLetter}</td>

                  <td className='border border-blue-200 px-4 py-2'><Link to={`${serverurl}/pdfUploads/${item?.resume}`} target='_blank' className='text-blue-700 underline'>Resume</Link></td>

                </tr>
                )) }

              </tbody>
            </table>
                   
                   :
            <p className='text-2xl text-red-500'>No Applications Added Yet!...</p>}

          </div>
          }

        </div>
      </div>


      <Footer />
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Admincareers