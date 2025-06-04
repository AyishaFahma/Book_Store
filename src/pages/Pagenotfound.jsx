import React from 'react'

function Pagenotfound() {
  return (
    <>


    <div className='md:grid grid-cols-3 w-full md:mt-10 mt-30'>

      <div></div>
      <div className='flex justify-center items-center flex-col'>

        <img src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="gif image" className='w-full '/>

        <div className='text-center '>
          <p>Oh No !</p>
          <h1 className='md:text-4xl text-2xl mt-3'>Look Like You're Lost</h1>
          <p className='mt-3 md:text-lg'>The page you are looking for is not available</p>
        </div>
        <button className='mt-8 rounded bg-blue-900 px-4 py-3 text-white hover:bg-white hover:border hover:border-blue-900 hover:text-blue-900'>BACK HOME</button>

      </div>

      <div></div>




    </div>
    
    
    </>
  )
}

export default Pagenotfound