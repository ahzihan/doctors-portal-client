import React from "react";
import doctorSmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
      <div style={{background: `url(${appointment})`}} className="mt-28 flex justify-center items-center">
        <div className="flex-1 hidden lg:block">
        <img
          src={doctorSmall}
          class="mt-[-100px] "
          alt="appointment"
        />
        </div>
        <div className="flex-1 p-10 lg:p-0">
          <h3 className="text-secondary text-xl uppercase font-bold">
            Appointment
          </h3>
          <h1 class="text-3xl lg:text-4xl text-white font-bold">Make an appointment Today</h1>
          <p class="py-6 lg:w-3/4 text-white">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
  );
};

export default MakeAppoinment;
