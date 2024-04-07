// States.js
import React from 'react';
import {stats } from "../contants/index.js"
import { stat } from '../style.js';
function States() {
  return (
    <>
      <div className="bg-[#1E1E1E] w-screen sm:h-[148px] h-[350px] px-36  text-white mt-16">
        <div className='grid sm:grid-cols-3 text-center'>

          {stats.map((info) => (

            <div key={info.id} className={`${stat.divSt}`}>
              <h5 className={`${stat.headS}`}> {info.value} </h5>
              <p className={`${stat.paraS}`}>{info.title}</p>
            </div>


          ))}
        </div>
      </div>
    </>
  );
}

export default States;
