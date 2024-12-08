import React from 'react'

const About = () => {

    const featureData = [
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
    <div>
      
        <div className='bg-shade2'>
            <div className="lg:container lg:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>About Us</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . About Us</h4>
                </div>
            </div>
        </div>

        <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:grid grid-cols-2 items-center lg:py-20 py-6 relative '>
            
            <div className=' flex '>
                <div className='bg-light_navy w-[555px] h-[249px] lg:h-[409px] pl-4 pb-4 -pr-9 rounded-lg '>
                    <div className=' absolute'>
                        <img className='lg:w-full' src="/assets/images/about1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <h2 className='text-navy'>Know About Our Ecomerce Business, History</h2>
                <p className='lg:mt-4 text-tertiary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <button className='lg:mt-16 mt-4'>Contact us</button>
            </div>

        </div>


        <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:mt-16 mt-4 mb-16'>
            <h1 className='text-center text-navy font-bold text-[42px] mb-3 lg:mb-8'>Our Features</h1>
            <div className=' lg:flex text-center justify-center   gap-6'>
                {featureData.map((item) => {
                    return <div className='h-[320px] lg:w-[270px] mb-8  shadow-primary '>
                        <div className='shadow-primary '>
                            <div className='flex justify-center items-center  pt-[64px]'>
                                <img src={item.pic} alt="" />
                            </div>
                            <div className=' mx-6 mt-7  flex items-center'>
                                <div>
                                    <h3 className='text-navy'>{item.title}</h3>
                                    <h4 className='text-black_rgba font-bold mt-5 mb-11'>{item.des}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

        <div className='bg-shade3   lg:mt-28 relative'>
            <div className="lg:container lg:px-[1.3rem] px-[.8rem] lg:py-20 py-6 lg:mb-52 mb-12">
                <h2 className='text-[42px] font-bold text-center lg:mb-20 mb-5'>Our Client Say!</h2>
                <div className='flex justify-center gap-20  '>
                    <img src="/assets/images/client1.png" alt="" />
                    <img className='absolute lg:top-52 top-24' src="/assets/images/client2.png" alt="" />
                    <img src="/assets/images/client3.png" alt="" />
                </div>
                <div className='lg:mt-6 mt-2 flex  '>
                   <div className=' text-center'>
                        <h3 className='text-[22px]'>Selina Gomez</h3>
                        <h6 className='text-extralight text-[10px]'>Ceo At Webecy Digital</h6>
                        <div className=' flex justify-center mt-4'>
                        <p className='text-extralight lg:w-[45%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        </div>
                   </div>
                </div>
                <div className='flex  justify-center lg:mt-12 mt-5'>
                    <div className='h-[3px] w-[18px] bg-pink_light'></div>
                    <div className='h-[3px] w-[27px] bg-pink mx-1'></div>
                    <div className='h-[3px] w-[18px] bg-pink_light'></div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default About
