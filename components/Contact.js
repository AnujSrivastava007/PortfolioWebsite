import Link from "next/link";
import React from "react";
import ContactLeft from "./blocks/ContactLeft";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import ContactRight from "./blocks/ContactRight";



const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Section */}
          <ContactLeft/>
          {/* Right Section */}
          <ContactRight/>
        </div>
        {/* Scroll to top button */}
        <div className="flex justify-center py-12">
          <Link href='/'>
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]'/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
