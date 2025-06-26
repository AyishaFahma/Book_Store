import React, { useEffect, useState } from 'react'
import Header from '../users/components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { homeBookApi } from '../sevices/allApi'

function Landingpage() {

  // store the all 4 book in state
  const [allHomeBook, setAllHomeBook] = useState([])


  const getAllHomeBook = async()=>{
    const result = await homeBookApi()
    //console.log(result);
    setAllHomeBook(result.data)
  }
  console.log(allHomeBook);
  


  // when page loads it shows newly added 4 book, so call api
  useEffect( ()=>{

    getAllHomeBook()

  },[])


  return (
    <>

      <Header />


      <div className='bg-[url(https://images.unsplash.com/photo-1532012197267-da84d127e765?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D)] bg-center bg-no-repeat bg-cover bg-fixed flex justify-center items-center' style={{ height: '600px' }}>

        <div className='text-white flex justify-center items-center flex-col md:p-10 '>
          <h1 className='md:text-5xl text-3xl font-bold'>Wonderful Gifts</h1>
          <p className='md:text-xl mt-5'>Give your family and friends a book</p>

          <div className='bg-white rounded-full mt-10'>
            <input type="text" placeholder='Search Books' className='md:py-3 py-2 md:px-50 px-10 text-black text-center rounded-full outline-0' />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-500 text-xl me-5 cursor-pointer' /></button>
          </div>
        </div>

      </div>

      {/* book card parts */}

      <div className='md:my-20 my-10'>
        <h1 className='text-center text-2xl font-bold mb-5'>NEW ARRIVALS</h1>
        <p className='text-center text-xl mb-5'>Explore Our Latest Collection</p>

        {allHomeBook?.length > 0 ? <div className='md:grid grid-cols-4 gap-x-10 p-10 md:px-20'>

          {allHomeBook?.map( (item) => (<div className='p-5 flex justify-center items-center flex-col md:mb-0 mb-10 shadow-lg/30'>
            <img src={item?.imageUrl} alt="book image" style={{ width: '100%', height: '300px' }} />

            <h1 className='text-blue-600 mt-5'>{item?.author}</h1>
            <p>{item?.title}</p>
            <p>$ {item?.dprice}</p>
          </div>)) }

        </div>
                 :
        <p className='text-center'>Loading....</p>}

        <div className='flex justify-center items-center md:my-10'>
          <Link to={'/all-books'}><button className='bg-blue-950 text-white py-3 px-5 hover:bg-white hover:border hover:border-blue-950 hover:text-blue-950 cursor-pointer'>Explore More</button></Link>
        </div>

      </div>

      {/* features sec */}

      <div className='md:grid grid-cols-2 p-10 md:px-20 gap-x-10'>
        <div>
          <h4 className='text-center font-semibold'>FEATURED AUTHORS</h4>
          <h1 className='text-center mt-2 mb-10 font-bold text-xl'>Captivates with every word</h1>
          <p className='font-semibold text-justify mb-15'>Authors in a bookstore application are the visionaries behind the books that fill the shelves, each contributing their own unique voice, creativity, and perspective to the world of literature. Whether writing fiction, non-fiction, poetry, or educational works, authors bring stories, ideas, and knowledge to life in ways that resonate with readers of all backgrounds.</p>
          <p className='font-semibold text-justify mb-15'>Their work spans a wide array of genres, from thrilling mysteries and heartwarming romances to thought-provoking memoirs and insightful self-help books. Through their words, authors not only entertain and inform but also inspire and challenge readers to think deeply, reflect, and grow. In a bookstore application, authors' works become accessible to readers everywhere, offering a diverse and rich tapestry of voices and experiences, all of which contribute to the evolving landscape of modern literature.</p>
        </div>

        <div className='md:py-15'>
          <img src="https://t4.ftcdn.net/jpg/09/69/34/27/360_F_969342778_BCPcWUTyPG7RsXUUPaJ2jDNiiCzrtyOd.jpg" alt="no image" className='w-full shadow-lg/30' style={{ height: '400px' }} />
        </div>

      </div>

      {/* testimonial sec */}

      <div className='flex justify-center items-center flex-col p-10 md:px-20'>
        <h4 className='font-semibold'>TESTIMONIALS</h4>
        <h1 className=' mt-2 mb-10 font-bold text-xl'>See What Others Are Saying</h1>

        <img src="https://cdn-icons-png.freepik.com/512/8742/8742495.png" alt="person image" style={{height:'100px'}} />
        <h1 className='my-5 font-bold text-xl'>Treesa Joseph</h1>
        <p className='text-justify font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati eos sequi voluptates nesciunt, velit voluptatum amet neque itaque suscipit aliquam distinctio odit, fuga molestiae reprehenderit praesentium? Quae, asperiores veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, minima itaque! Quas harum ab dolore </p>
      </div>


      <Footer/>



    </>
  )
}

export default Landingpage