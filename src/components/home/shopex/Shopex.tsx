import React from 'react'

const Shopex = () => {

    const shopexData = [
        {    
            pic: "/assets/images/shopex1.png",
            title: "24/7 Support",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        },
        {
            pic: "/assets/images/shopex2.png",
            title: "24/7 Support",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        },
        {
            pic: "/assets/images/shopex3.png",
            title: "24/7 Support",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        },
        {
            pic: "/assets/images/shopex4.png",
            title: "24/7 Support",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        },
    ]

  return (
    <div className='md:container md:wrapper md:mb-32 px-[.8rem] mb-12'>
        <h1 className='text-center text-navy'>What Shopex Offer!</h1>
        <div className=' md:flex text-center  gap-6 '>
            {shopexData.map((item) => {
                return <div className='   shadow-primary  mb-8 '>
                    <div className='shadow-primary '>
                        <div className='flex justify-center items-center  pt-[64px] '>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className=' mx-6 mt-7  flex items-center pb-4 2xl:pb-12 '>
                            <div>
                                <h3 className='text-navy'>{item.title}</h3>
                                <h4 className='text-black_rgba font-bold mt-5'>{item.des}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Shopex