import React from 'react';
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Left Section */}
        <div className='space-y-8'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold' data-aos="zoom-out-up">Get In Touch</h2>
          <p className='text-gray-600 text-base sm:text-lg md:text-xl pt-2' data-aos="zoom-out-up">
            You can contact me via email or phone for any inquiries or professional discussions. I am always ready to respond with a professional approach and strive to understand your requirements and provide effective solutions. For more information, you can also visit my professional profiles or website. I welcome your questions and value every opportunity for collaboration.
          </p>
          
          {/* Contact Info */}
          <div className='flex flex-col gap-3' data-aos="zoom-out-up">
            <div className='flex gap-3 items-center'>
              <IoMail size={30}/> hanzalasheikh666@gmail.com
            </div>
            <div className='flex gap-3 items-center'>
              <BsFillTelephoneInboundFill size={30}/> 0337-827473-8
            </div>
            <div className='flex gap-3 items-center'>
              <FaTiktok size={30}/> @hanzalasheikh9715
            </div>
            <div className='flex gap-3 items-center'>
              <IoLogoInstagram size={30}/> @sheikhhanzala408
            </div>
            <div className='flex gap-3 items-center'>
              <FaFacebook size={30}/> Hanzala Sheikh
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='space-y-8'>
          <div className='flex flex-col gap-2' data-aos="zoom-out-up">
            <label htmlFor="name" className='text-sm sm:text-base'>Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent p-2' id='name'/>
          </div>
          
          <div className='flex flex-col gap-2' data-aos="zoom-out-up">
            <label htmlFor="email" className='text-sm sm:text-base'>Email</label>
            <input type="email" className='h-[40px] bg-transparent border border-accent p-2' id='email'/>
          </div>
          
          <div className='flex flex-col gap-2' data-aos="zoom-out-up">
            <label htmlFor="msg" className='text-sm sm:text-base'>Message</label>
            <textarea className='bg-transparent border border-accent p-2' id='msg' rows={8}></textarea>
          </div>
          
          <button className='bg-accent text-white p-2 px-6 text-sm sm:text-base' data-aos="zoom-out-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
