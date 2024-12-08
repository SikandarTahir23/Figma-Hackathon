import React from 'react'
import { FaRegHeart,FaFacebookF,FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const ProductView = () => {

    const shareIcon = [
        {
            icon: <FaFacebookF/>
        },
        {
            icon: <AiFillInstagram/>
        },
        {
            icon: <FaTwitter/>
        },
    ]

  return (
                    <div>
                    <div className='md:container md:px-[1.3rem] px-[.8rem]'>

                            <div className='md:flex shadow-primary p-3  my-8 2xl:my-24 '>
                                        <div className='flex grid-cols-1 justify-center '>
                                            <div>
                                                <img src="/assets/images/product1.png" alt="" />
                                                <img className='py-[11px] md:mr-5' src="/assets/images/product2.png" alt="" />
                                                <img className='mb-3 md:mb-0' src="/assets/images/product3.png" alt="" />
                                            </div>
                                        </div>

                                        <div className='md:mr-10 '>
                                            <img className='h-full w-full' src="/assets/images/product4.png" alt="" />
                                        </div>

                                        <div className='flex items-center '>
                                        <div>
                                            <h2 className='text-navy'>Playwood arm chair</h2>
                                            <div className='flex items-center gap-1 mt-3'>
                                                <img src="/assets/images/reviews4.png" alt="" /> 
                                                <h6 className='text-navy'>(22)</h6>
                                            </div>
                                            <div className='flex items-center gap-5 my-3'>
                                                <h4 className='text-navy'>$32.00</h4>
                                                <h4 className='line-through text-pink'>$32.00</h4>
                                            </div>
                                            <h4>Color</h4>
                                            <p className='md:w-[70%] font-josefin text-grey_light mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                                            <div className='text-navy flex items-center mt-5 gap-3 md:ml-16'>
                                                <h4>Add To cart</h4>
                                                <FaRegHeart/>
                                            </div>
                                            <h4 className='mt-3 text-navy font-bold'>Categories:</h4>
                                            <h4 className='mt-3 text-navy font-bold'>Tags</h4>
                                            <div className='mt-3 flex items-center gap-4'>
                                            <h4 className='mt-3 text-navy font-bold'>Share</h4>
                                            <div className='flex gap-3'>
                                                {shareIcon.map((item) => {
                                                    return <div className='hover:bg-pink bg-navy rounded-full p-2 text-white hover:text-white'>
                                                        <a href="">{item.icon}</a>
                                                    </div>
                                                })}
                                            </div>
                                        </div>

                            </div>
                </div>



        </div>

        </div>
    </div>
  )
}

export default ProductView
