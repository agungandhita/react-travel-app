import React from 'react'
import Footer from './partials/Footer'
import Navbar from './partials/Navbar'
import AboutSlide from './partials/Sliding'

const AboutUs = () => {
  return (
    <div className=''>
        <Navbar/>
        <img src='/img/op.png' className=''/>
        <div className='Container'>
            <h1 className='text-center font-semibold text-2xl mt-8'>Travel Is About The Human Connection </h1>
            <h1 className='text-[#FF2E00] text-3xl font-bold text-center mt-8'>WE ARE GROWIN TRAVEL INDONESIA</h1>
            <div className='text-center mb-9'>
                <p>Travel like a human. The human part was always more important than the travel part. What we are about is belonging, and at the center <br></br> of belonging is love.<br></br>
                Over the past 10 years, the team at Tour Mount Bromo has always believed in building that relationship with each customers to turn <br></br>every trip into a memorable experience. It is the human connection that separates a tour/trip and an experience to remember.<br></br>
                We value and love every teammate and we help them to succeed in every way that we can. It is only through being truly passionate ,<br></br> knowledgeable and focused that we can do the best for our customers.
                </p>
            </div>
            <AboutSlide/>
            <div className='flex mt-10 container justify-between'>
                <div className='w-[60%]  my-auto'>
                    <h1 className='text-3xl font-bold'>TRAVEL WITH CONFIDENCE</h1>
                    <p className='text-xl mt-9'>Talk to us if you have any concerns about the tour packages.<br></br>
                        We are happy to answer all your questions.
                    </p>
              <button className='border shadow-md mt-8 px-8 py-2 mx-8 flex rounded-xl bg-[#FF2E00] text-white font-semibold text-lg'>
                Contact Us Now
              </button>
                </div>
                <img src='/img/jeep.png' className='w-[35%]'/>
            </div>

            <h1 className='text-center font-bold text-3xl mt-16 '>
             Location Growin Travel Indonesia
            </h1>
            <p className='text-center text-xl font-normal mt-8'>
            Perum Permata Regency 1 Blok 10/28, Perun Gpa, Ngijo, Kec. Karang Ploso, <br></br>
            Kabupaten Malang, Jawa Timur 65152
            </p>

            <iframe className='mx-auto mt-7 pb-20'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.9521455537024!2d112.60469731418937!3d-7.900068680794963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881c2c4637501%3A0x10433eaf1fb2fb4c!2sHummasoft%20Technology!5e0!3m2!1sid!2sid!4v1674017713271!5m2!1sid!2sid"
              width="1024"
              height="512"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs