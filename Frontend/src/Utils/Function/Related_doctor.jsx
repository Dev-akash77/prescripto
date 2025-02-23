export const related_doctor = (speciality,allDoctorsData,id)=>{
    return allDoctorsData?.filter((cur)=> cur.speciality === speciality&&cur._id!==id);
}