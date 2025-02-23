import React, { useContext } from 'react'
import { StoreContext } from '../Context/Store'
import DoctorsCard from '../Common/DoctorsCard';

const All_Doctors = () => {
  const {allDoctorsData} = useContext(StoreContext);
  return (
    <div className='grid place-content-center md:grid-cols-4 grid-cols-1 gap-5 w-full'>
      {
        allDoctorsData?.doctors.map((cur,id)=>{
          return <DoctorsCard data={cur} key={id}/>
        })
      }
    </div>
  )
}

export default All_Doctors