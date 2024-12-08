import React from 'react'

const BannerPage = () => {
  return (
    <div className='bg-lightPink2'>
        <div className='md:flex  container'>
                <div className=' mr-6 hidden lg:block'>
                    <img src="/assets/images/heroBg1.png" alt="" />
                </div>


                <div className='flex items-center'>
                    <div className='mx-[.8rem] md:mx-0 py-8'>
                        <h6 className='text-pink font-bold text-[14px] md:text-[16px]'>Best Furniture For Your Castle....</h6>
                        <h1>New Furniture Collection<br/>
                        Trends in 2020</h1>
                        <p className='text-tertiary font-semibold md:w-[78%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                        <br />
                        <button>Shop Now</button>
                    </div>
                </div>


            <div className='py-9 px-[.8rem]'>
                <img src="/assets/images/heroBg2.png" alt="" />
            </div>


        </div>
    </div>
  )
}

export default BannerPage