import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col mt-20 lg:items-center '>
        <h1 className='text-white text-8xl'>Get Started</h1>
        <p className='text-gray-500 text-sm mt-3'>Start your wedding journey, make it a memorable event with us.</p>

        <div className='grid gird-cols-1 gap-10 mb-10 mt-6 lg:grid-cols-2 '>
            <button className='bg-white rounded px-8 py-3 '>Start now</button>
            <button className='bg-white rounded px-8 py-3 '>Start now</button>

        </div>
    </div>
  )
}

export default Footer