import React from "react";

const ContactRight = () => {
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form
        action='https://getform.io/f/bfe6f83c-ac59-45b3-9cdf-b461f1e06e54'
        method='POST'
        encType='multipart/form-data'
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="text-sm py-2 uppercase">Name</label>
              <input
                name="name"
                type="text"
                className="border-2 rounded-lg p-3 flex border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm py-2 uppercase">Phone Number</label>
              <input
                name="phone number"
                type="text"
                className="border-2 rounded-lg p-3 flex border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-sm py-2 uppercase">Email</label>
            <input
              name="email"
              type="email"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-sm py-2 uppercase">Subject</label>
            <input
              name="subject"
              type="text"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-sm py-2 uppercase">Message</label>
            <textarea
              name="message"
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
            />
          </div>
          <button className="w-full p-4 text-gray-100 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactRight;
