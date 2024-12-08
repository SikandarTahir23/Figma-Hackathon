import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css";

const Featured = () => {

  const data = [
    {
      pic: "/assets/images/featured1.png",
      title: "Cantilever chair",
      des: "Code - Y523201",
      price: "$42.00"
    },
    {
      pic: "/assets/images/featured2.png",
      title: "Cantilever chair",
      des: "Code - Y523201",
      price: "$42.00"
    },
    {
      pic: "/assets/images/featured3.png",
      title: "Cantilever chair",
      des: "Code - Y523201",
      price: "$42.00"
    },
    {
      pic: "/assets/images/featured4.png",
      title: "Cantilever chair",
      des: "Code - Y523201",
      price: "$42.00     "
    },
  ]

  return (
    <div className='md:container md:wrapper px-[.8rem] md:mt-52 mt-12 md:mb-32  '>

        <div className='text-center'>
          <h1 className='text-navy md:mb-8 mb-4'>Featured Products</h1>
        </div>
        <div>
          <div className='md:flex 2xl:justify-between  gap-4 '>
            {data.map((item, index) => {
              return <div key={index} className=" 2xl:w-[270px] lg:w-[300px] mb-8 md:mb-0 ">
                                  
                                  <div className=' text-center shadow-primary '>
                                        <div className='bg-hex 2xl:h-[236px] lg:h-[150px] p-8 flex justify-center items-center '>
                                            <img  src={item.pic} alt="" />
                                        </div>

                                        <div className=' 2xl:px-16 py-4'>
                                            <h3 className='text-pink'>{item.title}</h3>

                                            <div className='my-3 flex justify-center'>
                                                <div className="flex h-1 w-[80px]  gap-2">
                                                    <div className="h-full w-full rounded-full bg-cyan"></div>
                                                    <div className="h-full w-full rounded-full bg-pink"></div>
                                                    <div className="h-full w-full rounded-full bg-blue"></div>
                                                </div>
                                            </div>

                                            <h5 className='text-navy'>{item.des}</h5>
                                            <h5 className='text-navy'>{item.price}</h5>
                                          </div>
                                  </div>

              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default Featured