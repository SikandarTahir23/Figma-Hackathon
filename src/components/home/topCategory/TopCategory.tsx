import React from 'react'

const TopCategory = () => {
    const topgoriesData = [
        {
            pic: "/assets/images/top1.png",
            title: "Mini LCW Chair",
            price: "$56.00"
        },
        {
            pic: "/assets/images/top2.png",
            title: "Mini LCW Chair",
            price: "$56.00"
        },
        {
            pic: "/assets/images/top3.png",
            title: "Mini LCW Chair",
            price: "$56.00"
        },
        {
            pic: "/assets/images/top4.png",
            title: "Mini LCW Chair",
            price: "$56.00"
        },
    ]

  return (
    <div className='lg:container lg:wrapper px-[.8rem] lg:mt-32 mt-12 '>
        <h1 className='text-navy text-center md:mb-12 md-8'>Top Categories</h1>

        <div className='w-full lg:flex gap-3 2xl:gap-9'>
            {topgoriesData.map((item) => {
                return <div className=''>
                    <div className=' flex justify-center'>
                        <div>
                            <div className='flex justify-center bg-hex shadow-primary 2xl:h-[269px] h-[220px] w-[220px] 2xl:w-[269px] p-6 rounded-full '>
                                <img src={item.pic} alt="" />
                            </div>
                            
                            <div className='text-center mt-6 text-navy md:mb-0 mb-16'>
                                <h3 className='font-josefin  font-medium'>{item.title}</h3>
                                <h4>{item.price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
    // <div className='md:container md:wrapper px-[.8rem] md:mt-32 mt-12'>
    //     <h1 className='text-navy text-center md:mb-12 md-8'>Top Categories</h1>
    //     <div className='md:flex md:gap-9 sb w-full'>
    //         {topgoriesData.map((item) => {
    //             return <div className='sb'>
    //                 <div className='bg-hex shadow-primary flex items-center justify-center 2xl:h-[269px] h-[330px] w-[328px] 2xl:w-[269px] rounded-full'>
    //                     <img src={item.pic} alt="" />
    //                 </div>
                    
    //                 <div className='text-center mt-6 text-navy md:mb-0 mb-16'>
    //                     <h3 className='font-josefin  font-medium'>{item.title}</h3>
    //                     <h4>{item.price}</h4>
    //                 </div>
    //             </div>
    //         })}
    //     </div>
    // </div>
  )
}

export default TopCategory