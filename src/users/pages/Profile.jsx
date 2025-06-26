import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,  faPlus } from '@fortawesome/free-solid-svg-icons'
import Editprofile from '../components/Editprofile'
import { toast, ToastContainer } from 'react-toastify'
import { addBookApi } from '../../sevices/allApi'

function Profile() {

  const [sellStatus, setSellStatus] = useState(true)

  const [bookStatus, setBookStatus] = useState(false)

  const [purchaseStatus, setPurchaseStatus] = useState(false)

  // state is created to store book details in sellbook 
  const [bookDetails, setbookDetails] = useState({

    title: "",
    author: "",
    publisher: "",
    language: "",
    noofpages: "",
    isbn: "",
    imageUrl: "",
    category: "",
    price: "",
    dprice: "",
    abstract: "",
    uploadImages: []

  })

  // state to store url
  const [preview, setpreview] = useState("")

  // preview contain only recent uploaded image url
  // so here all upload images are kept in a state array
  const [allUploadedImage, setallUploadedImage] = useState([])


  // to store token that is get from sessionstorage
  const [token, settoken] = useState("")

  //console.log(bookDetails);


  // image button click to add images from system
  const handleUpload = (e) => {
    // here, input boxine kittam e.target kodtha mathi input type text ayathukond ath e.target.value- data kittm . but here file so .files kodkkanam
    console.log(e.target.files);

    // here the data is= FileList {0: File, length: 1} as an object with 0 keyilanu image nte details 
    // then uploadeImage nnu paranja state nte keyilekk add cheyyanam athinu vendi ee full images ne fileArray variable store akki

    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])

    setbookDetails({ ...bookDetails, uploadImages: fileArray })

    // createObjectURL() - to convert a file into url. coz we wnat to display the book image and the book images are in src so in src it only take url form

    const url = URL.createObjectURL(e.target.files[0])
    //console.log(url);
    setpreview(url);
    // all uploadedimages state ilekk data ne add cheyya
    let images = allUploadedImage
    images.push(url)
    setallUploadedImage(images)
    console.log(preview);
    console.log(allUploadedImage);


  }

  // reset button
  const handleReset = () => {
    setbookDetails({
      title: "",
      author: "",
      publisher: "",
      language: "",
      noofpages: "",
      isbn: "",
      imageUrl: "",
      category: "",
      price: "",
      dprice: "",
      abstract: "",
      uploadImages: []
    })
    setpreview("")
    setallUploadedImage("")
  }

  //submit button
  const handleSubmit = async()=>{
    const {title,author,publisher,language, noofpages, isbn, imageUrl, category, price, dprice, abstract, uploadImages } = bookDetails
    
    console.log(title,author,publisher,language, noofpages, isbn, imageUrl, category, price, dprice, abstract, uploadImages);

    if(!title || !author || !publisher || !language || !noofpages || !isbn || !imageUrl || !category || !price || !dprice || !abstract, uploadImages.length == 0 ){
      toast.info("Please fill the form completely")
    }

    else{
      
      // api calling
      // if there is uploaded content(image upload cheyyunnundu ath systethil ulla content aanu so..) the data should be send as form data

      //inorder to send as form data steps are there
      // 1) create an object for the formdata class

      const reqbody = new FormData()
      // reqbody.append("title" , title) = ("key" , value)
      // here we use loop for reduce code. bookdetails is an object so in operator directly gives you the key

     
      for(let key in bookDetails){

        if( key != 'uploadImages'){
          reqbody.append(key , bookDetails[key])
        }

        else{
          //uploadImages is an array so each value is need to append so use map to iterate each item

          bookDetails.uploadImages.map( (item) => {
            reqbody.append("uploadImages" , item)
            // this reqbody is attached in api calling part
          })
        }

      }


      //create reqheader
      const reqHeader = {
        //authorization keyilanu token vekkendath
        // bearer key is provided before token - is the authorization schema basically used in jwt token verification
        //vere oru authorization certificte or secret data is not needed to provide inorder to verify the token 
        "Authorization" :`Bearer ${token}`
      }
      
      // token is need to be passed in reqheader
      const result = await addBookApi(reqbody , reqHeader)
      console.log(result);

      if(result.status == 200){

        toast.success('Book added successfully')
      }
      else if(result.status == 401){
        toast.warning(result.response.data)
      }
      else{
        toast.error('Something went wrong')
      }
      handleReset()


    } 
  }

  //to get token from session storage to provide in reqHeader when page load
  useEffect( () =>{
    if(sessionStorage.getItem("token")){
      // if token present place token in the state
      settoken(sessionStorage.getItem("token"))
    }
  },[])



  return (
    <>

      <Header />

      <div className='bg-blue-950' style={{ height: '200px' }}></div>
      {/* profile round part */}
      <div style={{ width: '180px', height: '180px', borderRadius: '50%', marginTop: '-130px', marginLeft: '70px' }} className='p-3 flex justify-center items-center bg-white'>
        <img src="https://media.istockphoto.com/id/967091776/photo/long-haired-woman-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=gCxvfyl5eDZlYRZlF7IqUGXz2YMxRLsK1_LOFjn4UTo=" alt="no image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      </div>

      <div className="flex justify-between my-5 px-5 md:px-20">
        <div className='flex justify-center items-center'>
          <h1 className='md:text-3xl text-2xl'>Ayisha Fahma  <FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 ms-3 mt-2' /></h1>

        </div>

        {/* edit profile button */}

        <Editprofile />
      </div>

      <p className='md:px-20 px-5 my-5 text-lg text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt suscipit ut ad, temporibus quis cumque voluptas dignissimos doloribus aperiam? Excepturi totam nulla omnis quas dolores quos voluptatum ratione fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti expedita ullam, id eius hic pariatur alias. Explicabo cumque laborum, dolore, earum doloremque, at enim dolores aliquam minus deserunt fugit nisi?</p>

      <div className='md:px-40 px-5'>


        {/* full tabs div */}
        <div className='flex justify-center items-center text-xl'>

          <p onClick={() => { setSellStatus(true); setBookStatus(false); setPurchaseStatus(false) }}
            className={sellStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Sell Book</p>

          <p onClick={() => { setSellStatus(false); setBookStatus(true); setPurchaseStatus(false) }}
            className={bookStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Book Status</p>

          <p onClick={() => { setSellStatus(false); setBookStatus(false); setPurchaseStatus(true) }}
            className={purchaseStatus ? 'px-4 py-3 text-blue-500 border-gray-300 border-l border-t border-r rounded cursor-pointer' : 'px-4 py-3 border-b border-gray-300 cursor-pointer'} >Purchase History</p>

        </div>


        {/* sell books div */}

        {sellStatus && <div className='md:p-10 mt-5'>
          <div className='bg-gray-200 md:p-10 p-3 rounded'>
            <h1 className='text-3xl font-medium text-center'>Book Details</h1>

            <div className="md:grid grid-cols-2 gap-x-5">
              <div className='my-10'>

                <div className="mb-3">
                  <input value={bookDetails.title} onChange={(e) => setbookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Title' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.author} onChange={(e) => setbookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.noofpages} onChange={(e) => setbookDetails({ ...bookDetails, noofpages: e.target.value })} type="text" placeholder='No of Pages' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.imageUrl} onChange={(e) => setbookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder='Image Url' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.price} onChange={(e) => setbookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.dprice} onChange={(e) => setbookDetails({ ...bookDetails, dprice: e.target.value })} type="text" placeholder='Discount Price' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <textarea value={bookDetails.abstract} onChange={(e) => setbookDetails({ ...bookDetails, abstract: e.target.value })} placeholder='Abstract' rows={'8'} className='p-2 bg-white rounded w-full outline-0'></textarea>
                </div>

              </div>


              <div className='my-10 px-2'>

                <div className="mb-3">
                  <input value={bookDetails.publisher} onChange={(e) => setbookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.language} onChange={(e) => setbookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.isbn} onChange={(e) => setbookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='p-2 bg-white rounded w-full outline-0' />
                </div>

                <div className="mb-3">
                  <input value={bookDetails.category} onChange={(e) => setbookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='p-2 bg-white rounded w-full outline-0' />
                </div>




                <div className='flex justify-center items-center mt-10 flex-col'>
                  {/* conditional rendering based on preview data if no data then upload img or selected image by user */}
                  {!preview ? <label htmlFor="uploadBookImg">
                    <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="no image" style={{ width: '200px', height: '200px' }} />
                  </label>
                    :
                    <img src={preview} alt="no image" style={{ width: '200px', height: '200px' }} />
                  }



                  {/* uploaded book images max 3 */}

                  {preview && <div className='mt-10 flex items-center'>

                    {
                      allUploadedImage.map((item) => (
                        <img src={item} alt="no image" style={{ width: '50px', height: '50px' }} className='mx-2' />
                      ))
                    }




                    {allUploadedImage.length < 3 && <label htmlFor="uploadBookImg">
                      <input type="file" id='uploadBookImg' style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />

                      <FontAwesomeIcon icon={faPlus} className='p-2 shadow-lg/30 bg-gray-300 border border-gray-300 ms-4 cursor-pointer' />

                    </label>}


                  </div>}


                </div>




              </div>
            </div>

            <div className="flex justify-end ">
              <button type='button' onClick={handleReset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white cursor-pointer'>Reset</button>
              <button  type='button' onClick={handleSubmit} className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4 cursor-pointer'>Submit</button>
            </div>

          </div>
        </div>}

        {/* book status div */}

        {bookStatus && <div className='shadow-lg/30 rounded py-8 md:px-5 px-2 my-5 border-gray-200 border'>
          {/* one book details/content */}
          <div className='bg-gray-200 p-5 rounded mb-5'>
            {/* book details part */}
            <div className="md:grid grid-cols-[5fr_2fr] gap-x-5">

              <div >
                <h1 className='text-2xl'>Harry Potter </h1>
                <p className='text-lg mb-3'>Jk Rowling</p>
                <p className='text-blue-600'>$ <span>20</span></p>

                <p className='mt-2 text-medium text-justify md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum itaque illo porro libero veritatis quam nam, accusantium ullam maxime corporis perferendis vitae explicabo aut facere ea? Consequuntur, dolores debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nulla, eius velit qui reprehenderit explicabo repellendus provident, earum totam rem quos non, omnis deserunt doloribus laborum aut autem nobis illo!</p>
              </div>

              <div>
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2016/10/57ee5c3a7c9988201038142a_418243985.jpg" alt="no image" style={{ width: '300px', height: '300px' }} />
              </div>

            </div>

            <div className="flex justify-between items-center w-full ">
              {/* soldout image */}
              <div >
                <img src="https://png.pngtree.com/png-clipart/20230423/ourmid/pngtree-sold-rubber-stamp-png-image_6718966.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
              {/* delete button */}
              <div >
                <button className='px-4 py-2 text-white bg-red-600 rounded hover:bg-white hover:text-red-700 hover:border hover:border-red-700'>Delete</button>
              </div>
            </div>
          </div>

          {/* next book details here */}



          {/* if no book added */}
          <div className='flex justify-center items-center flex-col'>
            <img src="https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png" alt="no image" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-500 mt-5'>No Book Brought...</p>
          </div>



        </div>}



        {/* purchase history */}

        {purchaseStatus && <div className='shadow-lg/30 border-gray-200 border rounded py-8 md:px-5 px-2 my-5'>
          {/* one book details/content */}
          <div className='bg-gray-200 p-5 rounded mb-5'>
            {/* book details part */}
            <div className="md:grid grid-cols-[5fr_2fr] gap-x-5">

              <div >
                <h1 className='text-2xl'>Harry Potter </h1>
                <p className='text-lg mb-3'>Jk Rowling</p>
                <p className='text-blue-600'>$ <span>20</span></p>

                <p className='mt-2 text-medium text-justify md:mb-0 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum itaque illo porro libero veritatis quam nam, accusantium ullam maxime corporis perferendis vitae explicabo aut facere ea? Consequuntur, dolores debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nulla, eius velit qui reprehenderit explicabo repellendus provident, earum totam rem quos non, omnis deserunt doloribus laborum aut autem nobis illo!</p>
              </div>

              <div>
                <img src="https://wp.scoopwhoop.com/wp-content/uploads/2016/10/57ee5c3a7c9988201038142a_418243985.jpg" alt="no image" style={{ width: '300px', height: '300px' }} />
              </div>

            </div>

            <div className="flex justify-between items-center w-full ">
              {/* soldout image */}
              <div >
                <img src="https://png.pngtree.com/png-clipart/20230423/ourmid/pngtree-sold-rubber-stamp-png-image_6718966.png" alt="" style={{ width: '100px', height: '100px' }} />
              </div>
            </div>

          </div>

          {/* next book details here */}



          {/* if no book added */}

          <div className='flex justify-center items-center flex-col'>
            <img src="https://www.jaivijaybookcentre.com/public/frontend/images/no-record.png" alt="no image" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-500 mt-5'>No Book Brought...</p>
          </div>





        </div>}


      </div>







     < ToastContainer position='top-center' theme='colored' autoClose={2000}/>

      <Footer />


    </>
  )
}

export default Profile