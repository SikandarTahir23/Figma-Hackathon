import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link'

const Footer = () => {
    
    const footerIcon = [
        {
            icon: <FaFacebookF/>
        },
        {
            icon: <FaInstagram/>
        },
        {
            icon: <FaTwitter/>
        },
    ]

    const footerData = [
        {
            title: "Catagories",
            list1: "Laptops & Computers",
            list2: "Cameras & Photography",
            list3: "Smart Phones & Tablets",
            list4: "Video Games & Consoles",
            list5: "Waterproof Headphones",
        },
        {
            title: "Customer Care",
            list1: "My Account",
            list2: "Discount",
            list3: "Returns",
            list4: "Orders History",
            list5: "Order Tracking",
        },
        {
            title: "Pages",
            list1: "Blog",
            list2: "Browse the Shop",
            list3: "Category",
            list4: "Pre-Built Pages",
            list5: "Visual Composer Elements",
            list6: "WooCommerce Pages",
        },
    ]

  return (
    <>
    <div className='bg-shade'>

        <div className='wrapper2  py-4'>
            <div className='md:flex justify-between md:py-24'>
                    <div className='md:w-[402px] '>
                        <h2>Hekto</h2>
                        <div className='flex md:mt-8 mt-2'>
                            <input
                                type="search"
                                className="
                                    text-left
                                    md:w-[63%]
                                    pmd:x-10
                                    md:py-1.5
                                    font-normal
                                    text-extralight
                                    border border-solid border-gray-300
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="exampleSearch"
                                placeholder="Enter Email Address"
                                />
                            <button className='footer_button'>Sing Up</button>
                        </div>
                        <h4 className='text-extralight mt-6'>Contact Info</h4>
                        <h4 className='font-lato text-extralight mt-2'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
                    </div>

                    <div className='md:flex gap-20 mt-12 md:mt-0'>
                        {footerData.map((item) => {
                            return <div>
                                <div className='text-extralight'>
                                    <h3 className='text-black md:mb-8 mb-5 text-[22px]'>{item.title}</h3>
                                    <div className=''>
                                        <h4 className='mb-5'>{item.list1}</h4>
                                        <h4 className='mb-5'>{item.list2}</h4>
                                        <h4 className='mb-5'>{item.list3}</h4>
                                        <h4 className='mb-5'>{item.list4}</h4>
                                        <h4 className='mb-5'>{item.list5}</h4>
                                        <h4>{item.list6}</h4>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
        </div>

    </div>

    <div className='bg-extrashade p-4'>
        <div className='wrapper2 lg:flex justify-between items-center '>
            <div>
                <h4 className='font-lato text-center text-extragray'>©Webecy - All Rights Reserved</h4>
            </div>
            <div className='flex items-center gap-4 '>
                {footerIcon.map((item) => {
                    return <div className='hidden lg:block bg-navy p-2 h-8 rounded-full'>
                        <Link href="">
                            <a className=' text-white' href="">{item.icon}</a>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer