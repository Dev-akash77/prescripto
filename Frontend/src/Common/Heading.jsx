import React from 'react'

const Heading = ({heading,text}) => {
  return (
    <div className='cc'>
        <h2 className='text-black cc text-3xl font-semibold'>{heading}</h2>
        <p className='mt-3 text-center md:text-base text-[.8rem]'>{text}</p>
    </div>
  )
}

export default Heading