import React from 'react'
import Footer from './partials/Footer'
import Navbar from './partials/Navbar'

const Destination = () => {
  return (
    <div>
      <Navbar/>
        <img src='/img/des.png'className=''/>

        <div className='container'>
            <div className="mt-11 mb-7 grid grid-cols-3 grid-rows-4 ">

            <div className='mx-auto rounded-xl w-64 mb-8 '>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
            </div>

            <div className=' mx-auto rounded-xl w-64 mb-8'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='mx-auto rounded-xl w-64 mb-8'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>

             <div className='rounded-xl w-64 mb-8 mx-auto'>
              <a>
                <img src='/img/dest.png'className='object-contain'/>
                <h1 className='font-semibold text-xl text-center mt-3'>Pura Penataran</h1>
              </a>
             </div>
            </div>

            {/* card end */}

            <div className='w-[35%] mb-9 relative'>
            <img src='/img/so.png' assName='object-contain'/>
            <h1 className='absolute top-2 mx-3 text-white font-semibold text-2xl'>
                Souvenir on bali
            </h1>
            </div>

            <div className='flex mt-10 container justify-between'>
                <div className='w-[40%]  my-auto'>
                  <h1 className='text-3xl text-center font-bold'>
                    Krisna
                  </h1>

                  <div className='flex mx-auto'>
                    <img src='/icons/lok.png' className='w-[12%] mx-12 object-contain'/>
                    <p className='mt-4 text-2xl font-semibold'>Jl. Raya Tuban No <br></br> 2X, Kuta</p>
                  </div>
                </div>
                <img src='/img/tuban.png' className='w-[50%] object-contain'/>
            </div>

            <div className='flex mt-10 container mb-28'>
            <img src='/img/tuban.png' className='w-[50%] object-contain'/>
                <div className='w-[40%]  my-auto'>
                  <h1 className='text-3xl text-center font-bold ml-24'>
                  Pasar Seni ubud
                  </h1>

                  <div className='flex mx-auto'>
                    <img src='/icons/lok.png' className='object-contain w-[30%] mx-12'/>
                    <p className='mt-4 text-2xl font-semibold'>Jl. Raya Ubud No.35, Ubud, Kecamatan Ubud, Kabupaten Gianya</p>
                  </div>
                </div>
                
            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Destination