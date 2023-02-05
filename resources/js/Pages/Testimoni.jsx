import React from 'react'
import DropText from './partials/DropText'


const Testimoni = () => {
  return (
    <div className='container'>
        <div className="text-center mx-auto my-9">
            <h1 className='text-4xl font-semibold '>
                What Our Customers say?
            </h1>
        </div>

        <div className='grid-cols-3'>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Konok</h5>
                <p class="text-gray-700 text-base mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.”
                </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
        </div>
        <DropText/>
        
    </div>
  )
}

export default Testimoni