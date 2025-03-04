import React from "react";
import { useContext } from "react";
import { StoreContext } from "../Context/Store";
import LastAppointment from "../Components/LastAppointment";
import Loader from "./../UI/Loader";

const DashBoard = () => {
  const {
    allDoctotrData,
    allAppointmentData,
    allUserData,
    appointmentLoading,
  } = useContext(StoreContext);

  if (appointmentLoading) {
    return (
      <div className="h-screen w-screen cc">
        <Loader />
      </div>
    );
  }

  return (
    <div className="section_margin sidebar_margin w-max">
      <div className="flex items-center gap-[2rem]">
        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans p-2 rounded-md">
            <svg
              width="35"
              height="39"
              viewBox="0 0 35 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6111 13.1499L10.8386 13.1304C10.9247 13.1207 11.0027 13.0898 11.0677 13.0443L11.0661 13.0459C11.2838 13.7967 11.5504 14.5865 11.8835 15.4136C12.3109 16.4959 12.7318 17.3848 13.203 18.2428L13.138 18.1128C13.099 18.7043 13.0519 19.3121 12.9901 19.9004C12.9609 20.2628 12.8894 20.6008 12.7805 20.9193L12.7886 20.89C12.7691 20.8982 12.7415 24.2701 12.7415 24.2701C12.7431 26.4688 14.2658 28.31 16.3134 28.7992L16.3459 28.8057C16.4385 28.57 16.6628 28.4059 16.926 28.4059H17.8588C18.1204 28.4091 18.3447 28.5716 18.4373 28.8008L18.4389 28.8057C20.5239 28.3149 22.0531 26.4737 22.0612 24.2734C22.0612 24.2734 22.0043 20.9144 21.9751 20.8917C21.8857 20.6073 21.8142 20.2725 21.7768 19.928L21.7752 19.9036C21.7183 19.3121 21.6809 18.719 21.6273 18.1161C22.0287 17.3913 22.4496 16.504 22.8201 15.5891L22.8818 15.4169C23.215 14.5897 23.4733 13.8016 23.6992 13.0492C23.7626 13.0947 23.8406 13.1255 23.9251 13.1353H23.9267L24.1559 13.1548C24.4321 13.184 24.6759 12.9565 24.6986 12.6039L24.9456 9.46592C24.9456 9.4643 24.9456 9.46267 24.9456 9.46267C24.9456 9.19779 24.7474 8.98003 24.4923 8.94753H24.489H24.4614C24.5248 8.49089 24.5605 7.96438 24.5605 7.42973C24.5605 6.26295 24.3883 5.13516 24.0681 4.074L24.0892 4.15688C23.1516 2.09957 21.2925 0.606144 19.0532 0.188506L19.011 0.182006C18.5299 0.0828776 17.9693 0.0162505 17.3973 0H17.3827H17.3632C16.7798 0.0113754 16.2191 0.0763774 15.6764 0.191756L15.7349 0.182006C13.4565 0.611019 11.6007 2.10444 10.6744 4.113L10.6566 4.15688C10.3543 5.13191 10.1804 6.2532 10.1804 7.41348C10.1804 7.95462 10.2178 8.48764 10.2909 9.00766L10.2844 8.94753C10.0261 8.97678 9.82617 9.19291 9.82617 9.45617V9.46755L10.0732 12.6055C10.0959 12.9663 10.3429 13.184 10.6094 13.1548L10.6111 13.1499Z"
                fill="#F7DECE"
              />
              <path
                d="M34.8034 33.9176C34.6897 28.9775 34.1957 27.8594 33.9291 27.1022C33.8235 26.7983 33.7374 24.7442 30.3443 23.4117C28.2642 22.5927 25.5796 22.5764 23.3078 21.616V24.2876C23.3029 27.1607 21.2456 29.5511 18.5237 30.0728L18.4863 30.0793C18.4359 30.375 18.1824 30.596 17.8785 30.5993H17.8493V32.6143C17.8493 34.5839 19.4451 36.1797 21.4146 36.1797C23.3842 36.1797 24.98 34.5839 24.98 32.6143V31.2071C23.992 31.0592 23.2428 30.2174 23.2428 29.2001C23.2428 28.0805 24.1512 27.1721 25.2709 27.1721C26.3905 27.1721 27.2989 28.0805 27.2989 29.2001C27.2989 30.0874 26.7285 30.8414 25.9355 31.1177L25.9209 31.1226V32.6143V32.6907C25.9209 35.1803 23.9026 37.1986 21.413 37.1986C18.9234 37.1986 16.9051 35.1803 16.9051 32.6907C16.9051 32.6631 16.9051 32.6371 16.9051 32.6095V32.6127V30.5798C16.6159 30.5603 16.3819 30.3425 16.3363 30.063V30.0598C13.59 29.5251 11.5424 27.1428 11.5359 24.2811V21.5884C9.25438 22.5683 6.55354 22.5878 4.4621 23.4084C1.05925 24.7394 0.981243 26.7885 0.87724 27.0973C0.617232 27.8578 0.116716 28.971 0.00296249 33.9144C-0.0165381 34.5644 0.00296258 35.5606 1.96277 36.4316C6.23016 38.1054 11.7277 38.6254 17.1472 38.9992H17.6673C23.0982 38.6287 28.5876 38.1103 32.8517 36.4316C34.8034 35.5654 34.8213 34.5742 34.8034 33.9176ZM10.9461 31.9026H8.92124V33.9355H7.47495V31.9091H5.45013V30.4628H7.47495V28.438H8.92124V30.4628H10.9461V31.9026Z"
                fill="#577CFF"
              />
              <path
                d="M26.367 29.1837C26.367 28.5791 25.8779 28.0884 25.2733 28.0884C24.6688 28.0884 24.1797 28.5775 24.1797 29.182C24.1797 29.7866 24.6688 30.2757 25.2733 30.2757C25.8762 30.2757 26.3654 29.7866 26.367 29.1837Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-gray text-xl">{allDoctotrData?.doctor.length}</p>
            <p className="text-[#acacac]">Doctors</p>
          </div>
        </div>

        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans p-2 rounded-md">
            <svg
              width="29"
              height="36"
              viewBox="0 0 29 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 28.2857C14.5 22.6286 19.2455 18 24.9136 18C26.3636 18 27.6818 18.2571 29 18.7714V9C29 8.22857 28.4727 7.71429 27.6818 7.71429H7.90909H5.27273C3.82273 7.71429 2.63636 6.55714 2.63636 5.14286C2.63636 3.72857 3.82273 2.57143 5.27273 2.57143H27.6818C28.4727 2.57143 29 2.05714 29 1.28571C29 0.514286 28.4727 0 27.6818 0H5.27273C2.37273 0 0 2.31429 0 5.14286V30.8571C0 33.6857 2.37273 36 5.27273 36H7.90909H18.1909C15.95 34.0714 14.5 31.3714 14.5 28.2857Z"
                fill="#577CFF"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-gray text-xl">
              {allAppointmentData?.appointment.length}
            </p>
            <p className="text-[#acacac]">Appointments</p>
          </div>
        </div>

        <div className="flex bg-white border-2 w-[15rem] border-[#e4e4e4dd] px-3 py-5 items-center gap-5 rounded-md cursor-pointer">
          <div className="bg-blueTrans p-2 rounded-md">
            <svg
              width="42"
              height="45"
              viewBox="0 0 42 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9006 31.8111V26.3804H13.5518V31.8111L20.7262 38.0178L27.9006 31.8111Z"
                fill="#E6AF78"
              />
              <path
                d="M38.9942 34.3517L29.1299 32.0928C28.9809 32.0587 28.8439 32.0008 28.7157 31.9306L20.7262 36.4664L13.0483 31.7112C12.8496 31.8933 12.6028 32.0286 12.3226 32.0929L2.45837 34.3518C1.01795 34.6817 0 35.9325 0 37.3727V43.449C0 44.306 0.713795 45.0006 1.5943 45.0006H39.858C40.7386 45.0006 41.4523 44.3059 41.4523 43.449V37.3727C41.4525 35.9325 40.4345 34.6815 38.9942 34.3517Z"
                fill="#577CFF"
              />
              <path
                d="M13.5518 26.3805V32.1104C22.5896 35.2795 27.9006 27.348 27.9006 27.348V26.3804H13.5518V26.3805Z"
                fill="#D29B6E"
              />
              <path
                d="M10.3643 8.53662L11.0589 23.4104C11.1237 24.7999 11.8238 26.0885 12.9671 26.923L16.2632 29.329C17.0911 29.9332 18.0981 30.26 19.133 30.26H22.3217C23.3566 30.26 24.3635 29.9333 25.1915 29.329L28.4875 26.923C29.6308 26.0884 30.3309 24.8 30.3958 23.4104L31.0904 8.53662H10.3643Z"
                fill="#F7DECE"
              />
              <path
                d="M18.3359 11.64C21.5246 11.64 26.3075 10.8642 27.442 8.53662H10.3643L11.0589 23.4104C11.1237 24.7999 11.8238 26.0884 12.9672 26.923L16.2633 29.329C17.0912 29.9332 18.0981 30.26 19.1331 30.26H20.7274C19.1331 30.26 15.9444 27.1566 15.9444 23.2775C15.9444 21.3803 15.9444 16.295 15.9444 13.9675C15.9444 13.1916 16.7415 11.64 18.3359 11.64Z"
                fill="#F2D4B7"
              />
              <path
                d="M5.85507 39.9636L0.689542 35.4475C0.256696 35.9809 0.00292969 36.6522 0.00292969 37.3708V43.4471C0.00292969 44.3041 0.716725 44.9987 1.59723 44.9987H7.17736V42.8494C7.17727 41.7484 6.69656 40.6992 5.85507 39.9636Z"
                fill="#7F9BFF"
              />
              <path
                d="M35.6026 39.9636L40.7681 35.4475C41.2009 35.9809 41.4547 36.6522 41.4547 37.3708V43.4471C41.4547 44.3041 40.7409 44.9987 39.8604 44.9987H34.2803V42.8494C34.2803 41.7484 34.761 40.6992 35.6026 39.9636Z"
                fill="#7F9BFF"
              />
              <path
                d="M13.4386 30.0849L20.7251 36.4672C20.7251 36.4672 18.6845 37.4698 16.1663 39.4905C15.6469 39.9073 14.8611 39.7385 14.5825 39.1419L11.1592 31.8123L12.2422 30.2314C12.5116 29.8376 13.0773 29.7685 13.4386 30.0849Z"
                fill="#7F9BFF"
              />
              <path
                d="M28.0115 30.0849L20.7251 36.4672C20.7251 36.4672 22.7657 37.4698 25.2838 39.4905C25.8033 39.9073 26.5891 39.7385 26.8677 39.1419L30.291 31.8123L29.208 30.2314C28.9384 29.8376 28.3727 29.7685 28.0115 30.0849Z"
                fill="#7F9BFF"
              />
              <path
                d="M25.5566 3.39727L26.3039 8.53719C29.7153 9.20121 30.207 14.4116 30.2778 15.8998C30.2906 16.1699 30.3792 16.4307 30.5297 16.6579L31.8313 18.623C31.8313 18.623 31.3858 15.3741 33.4256 13.1921C33.4256 13.1921 34.1262 0.293892 25.5566 3.39727Z"
                fill="#404040"
              />
              <path
                d="M11.1277 2.00658L12.3068 2.79049C6.97584 6.62117 7.9722 13.1915 7.9722 13.1915C9.5665 14.7432 9.5665 18.6224 9.5665 18.6224L11.1608 17.0707C11.1608 17.0707 10.5455 12.5884 13.5522 10.8641C16.3423 9.26391 18.7836 10.0882 21.2748 10.0882C27.951 10.0882 29.8193 7.63949 29.4955 4.6574C29.3279 3.11437 26.9038 -0.0998368 20.7268 0.0023815C18.2339 0.0436028 13.5524 0.778204 11.1277 2.00658Z"
                fill="#242424"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-gray text-xl">{allUserData?.user.length}</p>
            <p className="text-[#acacac]">Patients</p>
          </div>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <LastAppointment data={allAppointmentData?.appointment} />
      </div>
    </div>
  );
};

export default DashBoard;
