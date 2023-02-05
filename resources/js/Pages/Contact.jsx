import React from 'react'
import Slide from './partials/Carousel'
import Contain from './partials/Contain'
import Footer from './partials/Footer'
import Navbar from './partials/Navbar'

const Contact = () => {
  return (
    <div>  
      <Navbar/>  
      <Slide/>  
      <Contain/>

      <div className='bg-[#D9D9D9] w-[45%] px-8 relative m-20 p-10 transform translate-x-[70%]'>

      <div className='grid-cols-2 w-[60%] grid  gap-4 grid-rows-2 mx-14 my-8 absolute -left-[55%]'>
            <button className='border bg-[#FD522C] rounded py-5'>
              <img src='/icons/ig.png' className='mx-auto w-20 object-contain'/>
              <h1 className='text-center mt-4'>Instagram</h1>
            </button>
            <button className='border bg-[#FF2E00] rounded py-5'>
              <img src='/icons/wa.png' className='mx-auto w-20 object-contain'/>
              <h1 className='text-center mt-4'>Whatsapp</h1>
            </button>
            <button className='border bg-[#FF2E00] rounded py-5'>
              <img src='/icons/fb.png' className='mx-auto w-20 object-contain'/>
              <h1 className='text-center mt-4'>Facebook</h1>
            </button>
            <button className='border bg-[#FD522C] rounded py-5'>
              <img src='/icons/gmail.png' className='mx-auto w-20 object-contain'/>
              <h1 className='text-center mt-4'>Gmail</h1>
            </button>
      </div>

        <form className='ml-32'>
          <img src='/img/logo.png' className='mx-auto w-40'/>
          <h1 className='font-semibold text-4xl text-center'>Contact Us</h1>
          <input className='w-full h-10 bg-white rounded-xl mt-4 '/>
          <input className='w-full h-10 bg-white rounded-xl mt-4 '/>
          <textarea className='bg-white h-44 w-full mt-4'/>
          <a className='flex mx-auto border shadow-md text-center m-5 w-32 px-9 py-1 rounded-xl bg-[#FF2E00] text-white font-semibold '>
              Submit
          </a>
        </form>
      </div>
      <Footer/>      
    </div>


  )
}

export default Contact