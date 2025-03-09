import React, { useContext } from "react";
import { toast } from "react-toastify";
import { api, razorpayApi, razorpayVerify } from "./../Api/Api";
import { StoreContext } from "./../Context/Store";
import { useNavigate } from "react-router-dom";
const AppointMentCard = ({ data }) => {
  const { token, allAppointmentRefetch, allDoctorsRefetch } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const handleCancleAppointment = async (appointmentId) => {
    try {
      const { data } = await api.post(
        "/api/user/appointment/cancel",
        { appointmentId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        allAppointmentRefetch();
        allDoctorsRefetch();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // ! payment
  const initpay = (data) => {
    const options = {
      key: import.meta.env.VITE_RAZOR_PAY_ID,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Doctor Booking System",
      description: "Appointment Payment",
      order_id: data.order.id,
      handler: async function (response) {
        console.log("Payment Success Response", response);
        const verifyData = await razorpayVerify(
          response?.razorpay_order_id,
          token
        );
        if (verifyData?.success) {
          toast.success(verifyData.message);
          allAppointmentRefetch();
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async (id) => {
    try {
      const data = await razorpayApi(id, token);

      if (data?.success) {
        initpay(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:border-[#dfdfdfdd] border-black border-t-[.04rem] py-4 flex mt:items-center justify-between md:flex-row flex-col">
      <div className="flex gap-7 md:flex-row flex-col ">
        <div
          className="bg-blueTrans cc cursor-pointer"
          onClick={() => {
            navigate(`/doctors/details/${data?.doctorData._id}`);
          }}
        >
          <img src={data?.doctorData.image} alt="" className="w-[9rem]" />
        </div>

        <div className="flex flex-col gap-[.08rem] md:mb-0 mb-5">
          <h2 className="font-semibold">{data?.doctorData.name}</h2>
          <p className=" text-gray">{data?.doctorData.speciality}</p>
          <p className="mt-[.17rem]">Address:</p>
          <p className=" text-gray capitalize ">{data?.doctorData.address}</p>
          <p className="mt-2 font-medium">
            Date & Time:{" "}
            <span className="text-gray capitalize">
              {data?.slotDate} | {data?.slotTime}
            </span>
          </p>
        </div>
      </div>

      {data.payment ? (
        <div className="h-full flex flex-col justify-end mt:items-center gap-3">
          <div className="border border-[#dfdfdfdd] md:w-[12rem] h-[2.5rem] cc rounded-sm bg-blueTrans border-none">
            Paid
          </div>
        </div>
      ) : !data.cancle ? (
        <div className="h-full flex flex-col justify-end md:items-center gap-3">
          <div
            className="border border-[#dfdfdfdd] md:w-[12rem] h-[2.5rem] cc rounded-sm text-gray cursor-pointer hover:bg-blue hover:border-none hover:text-white duration-300"
            onClick={() => {
              handlePayment(data._id);
            }}
          >
            Pay Online
          </div>
          <div
            className="border border-[#dfdfdfdd] md:w-[12rem] h-[2.5rem] cc rounded-sm text-gray cursor-pointer hover:bg-[#f03535] hover:border-none hover:text-white duration-300"
            onClick={() => {
              handleCancleAppointment(data._id);
            }}
          >
            Cancel Appointment
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-end md:items-center gap-3">
          <div className="border border-[#dfdfdfdd] md:w-[12rem] h-[2.5rem] cc rounded-sm border-[#f03535] text-[#f03535]">
            Appointment Cancelled
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointMentCard;
