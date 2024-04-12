
import React from 'react';
import { underLine } from '../assets';
import { latestNews } from '../contants';
import { latest } from '../style';

function LatestNews() {
  return (
    <div className='text-white w-screen sm:h-[800px] h-[1500px] md:mt-44 mt-10 '>

      <div className='flex flex-col justify-center text-center items-center '>
        <h1 className="text-[#A5886D] md:text-[44px] text-[35px] font-bold font-['Monda'] leading-10">Latest News</h1>
        <img src={underLine} alt="img" className='w-[302.56px] h-[15px] mt-2' />
      </div>

      <div className="grid sm:grid-cols-3  justify-center text-center sm:mt-28 mt-20 sm:gap-2 gap-20">

        {latestNews.map((info, idx) => (

          <div key={idx} className={`${latest.outerDiv}`}>

            <div className={`${latest.innerDiv}`}> 

              <img src={info.src} alt="img" className="w-[300.13px] h-64" />

              <time className="text-white text-[10px] font-normal font-['Monda'] leading-none sm:mt-5 mt-5 ">{info.data}</time>

              <p className={`${latest.head}`}>{info.head}</p>

              <div className={`${latest.btnDiv}`}>

            <button className={`${latest.btnP}`}>Read More</button>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default LatestNews;
