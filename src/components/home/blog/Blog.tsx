import React from 'react'

const Blog = () => {

    const blogData = [
        {
            pic: "/assets/images/blog1.png",
            des: "SaberAli",
            des2: "21 August,2020",
            title: "Top esssential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"

        },
        {
            pic: "/assets/images/blog2.png",
            des: "Surfauxion",
            des2: "21 August,2020",
            title: "Top esssential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"

        },
        {
            pic: "/assets/images/blog3.png",
            des: "SaberAli",
            des2: "21 August,2020",
            title: "Top esssential Trends in 2021",
            info: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            footer: "Read More"

        },
    ]

  return (
    <div className='md:container md:wrapper md:mt-32 md:mb-32 px-[.8rem]'>
        <h2 className='text-navy text-center md:my-16 mb-4 font-josefin font-bold'>Leatest Blog</h2>
        <div className='lg:flex justify-center lg:gap-4'>
            {blogData.map((item) => {
                return <div className=' mb-8'>
                    <div>
                        <div className=' flex justify-center'>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='flex justify-between    px-5 my-2 '>
                            <div className='flex items-center  gap-2'>
                                <img src="/assets/icons/pen.png" alt="sabir" />
                                <h6 className='text-navy font-medium'>{item.des}</h6>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src="/assets/icons/calendar.png" alt="" />
                                <h6 className='text-navy font-medium'>{item.des2}</h6>
                            </div>
                            
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-navy font-josefin'>{item.title}</h3>
                        <h4 className='mt-4 text-medium_gray'>{item.info}</h4>
                        <h4 className='text-navy text-sm mt-4 underline'>{item.footer}</h4>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Blog