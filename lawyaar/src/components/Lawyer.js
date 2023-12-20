// User.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import RatingStar from './RatingStar'; // Import the RatingStar component

const Lawyer = (props) => {
  return (
    <div>
      <div className="h-[10rem] w-max text-center m-5  bg-white rounded-lg flex  align-middle cursor-pointer">
        <img src={props.pfp} alt="user" className="justify-start pr-3 rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold mt-3 pr-5 flex justify-start align-top">{props.name}</h1>

          <p className="text-l  flex pr-5 justify-start">
            <FontAwesomeIcon icon={faLocationDot} className='pt-1 pr-2 text-sm' />
            {props.location}
          </p>



          <p className='flex'><span className='font-bold text-gray-500	pr-1'>Speaks : </span>{props.lang}</p>
          <button className='bg-[#2A1F2F] text-white rounded-lg px-2 py-1  mt-6'>View Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
