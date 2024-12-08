import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { FaListUl, FaRegHeart, FaSearchPlus  } from 'react-icons/fa'
import { BsFillGridFill } from 'react-icons/bs'
import shopListData from './shoplistdata'
import { CgShoppingCart } from 'react-icons/cg'
import Link from 'next/link'

const ShopList = () => {

    const listIcon = [
        {
            icon: <CgShoppingCart/>
        },
        {
            icon: <FaRegHeart/>
        },
        {
            icon: <FaSearchPlus/>
        }
    ]
    
  return (
    <>
    <div>
      
        <div className='bg-shade2'>
          <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
            <h2 className='text-navy'>Shop List</h2>
            <div className='flex gap-2 '>
              <h4>Home</h4>
              <h4>. Pages</h4>
              <h4 className='text-pink pb-[114px]'> . Shop List</h4>
            </div>
          </div>
        </div>

        <div className="md:container md:px-[1.3rem] px-[.8rem] pt-12 md:pt-[98px] flex items-center justify-between">
          <div className=''>
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

        <div className='md:container md:px-[1.3rem] px-[.8rem] md:mt-24 mt-6'>
            {shopListData.map((item) => {
                return <div className=' mb-8'>
                    <div className=' md:flex gap-6 boxShadow p-2 md:p-6 items-center '>
                        <div>
                            <img src={item.pic} alt="" />
                        </div>

                        <div>
                            <div className='flex items-center gap-4'>
                                <h3 className='text-navy'>{item.title}</h3>
                                <div className='my-3 flex justify-center '>
                                    <div className="flex h-3 md:w-[80px]  gap-2">
                                        <div className="h-3 w-3 rounded-full bg-yellow"></div>
                                        <div className="h-3 w-3 rounded-full bg-pink"></div>
                                        <div className="h-3 w-3 rounded-full bg-blue"></div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <h4 className='text-navy'>{item.offerPrice}</h4>
                                <h4 className='text-pink line-through'>{item.regularPrice}</h4>
                                <img src={item.review} alt="" />
                            </div>
                            <p className='mt-3 md:w-[70%] text-tertiary'>{item.des}</p>
                            <div className='flex items-center gap-4 '>
                                {listIcon.map((item) => {
                                    return <div className='flext justify-center mt-6 bg-white rounded-full p-4 shadow-2xl '>
                                        <Link href=''>
                                            <a className='text-xl text-navy' href="">{item.icon}</a>
                                        </Link>
                                    </div>
                                })}
                            </div>

                        </div>

                    </div>
                </div>
            })}
        </div>


    <div className='container px-[1.3rem] flex justify-center mt-44 mb-20'>
        <img src="/assets/images/logo1.png" alt="" />
    </div>


    </div>
    </>
  )
}

export default ShopList
