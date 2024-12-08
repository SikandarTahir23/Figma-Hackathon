import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import gridData from './shopgriddata'

const ShopGrid = () => {
  return (
    <>

        <div className='bg-shade2'>
          <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
            <h2 className='text-navy'>Shop Grid Default</h2>
            <div className='flex gap-2 '>
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className='text-pink pb-[114px]'> . Shop Grid Default</h4>
            </div>
          </div>
        </div>

        <div className="md:container md:px-[1.3rem] px-[.8rem] md:pt-[98px] md:flex items-center justify-between">
          <div className='mt-12 md:mt-0'>
              <h2 className='text-navy text-[28px] lg:text-[30px] 2xl:text-[34px]'>Ecommerce Acceories & Fashion item</h2>
              <h4 className='text-extralight font-lato'>About 9,620 results (0.62 seconds)</h4>
          </div>
          
          <div className='hidden lg:block'>
              <div className='flex gap-9 '>
                <div className='flex gap-2'>
                    <h3 className='text-navy font-normal'>Per Page: </h3>
                    <h3 className='border rounded-sm border-primary py-4 px-8' ></h3>
                </div>
                <div className='flex gap-2'>
                    <h3 className='text-navy font-normal'>Sort By: </h3>
                    <h4 className='text-extralight   border rounded-sm border-primary py-1 px-3 font-lato flex items-center gap-1'>Best Match <span><BsChevronDown/></span></h4>
                </div>
                <div className='flex gap-8'>
                  <div className='flex items-center gap-2'>
                      <h3 className='text-navy font-normal'>View:</h3>
                      <FaListUl className='text-navy'/>
                      <BsFillGridFill className='text-navy'/>
                  </div> 
                  <div>
                      <h3 className='border rounded-sm border-primary py-4 px-20' ></h3>
                  </div>
                </div>

              </div>
          </div>

        </div>

        <div className='md:container md:px-[1.3rem] md:grid grid-cols-4 '>
          {gridData.map((item) => {
             return <div className=' flex justify-center my-12 '>
              <div className=''>
                  <div className=' bg-hex flex justify-center md:h-[280px] md:w-[270px] p-12'>
                      <img src={item.pic} alt="" />
                  </div>
                    <h3 className='text-navy font-josefin text-center'>{item.title}</h3>

                      <div className='my-3 flex justify-center '>
                          <div className="flex h-3 w-[80px]  gap-2">
                              <div className="h-3 w-3 rounded-full bg-yellow"></div>
                              <div className="h-3 w-3 rounded-full bg-pink"></div>
                              <div className="h-3 w-3 rounded-full bg-blue"></div>
                          </div>
                      </div>

                      <div className='flex justify-center gap-5'>
                          <h4>{item.offerPrice}</h4>
                          <h4 className='text-pink line-through'>{item.regularPrice}</h4>
                      </div>
                      
              </div>
             </div>
          })}
        </div>

        <div className='container px-[1.3rem] my-24 flex justify-center'>
          <img src="/assets/images/logo1.png" alt="" />
        </div>
    </>
  )
}

export default ShopGrid
