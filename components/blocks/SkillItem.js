import React from 'react';
import Image from 'next/image';

const Skillbox = ({icon,text}) => {
  return (
    <div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={icon} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center uppercase">
                <h3>{text}</h3>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Skillbox;