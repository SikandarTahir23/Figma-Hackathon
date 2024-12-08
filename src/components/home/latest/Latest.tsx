import Link from 'next/link';
import React, {useState} from 'react'
import latestData from './latestdata'

const Latest = () => {

    const tags = [
        {
            btn: "New Arrival",
        },
        {
            btn: "Best Seller",
        },
        {
            btn: "Featured",
        },
        {
            btn: "Special Offer",
        }
    ]

    const categories = latestData.map(item => item.category)
    const [active, setActive] = useState(tags[0].btn)


  return (
    <div className="md:container md:wrapper px-[.8rem]">
            <h1 className='text-navy text-center'>Latest Products</h1>

            <div className='hidden lg:block'>
                <div className=' lg:flex justify-center lg:gap-12 text-navy  mb-14 '>
                    {tags.map((item) => {
                        return <div>
                            <div className='text-lg cursor-pointer hover:text-pink hover:font-semibold' onClick={() => {
                                setActive(item.btn)
                            }}>
                                {item.btn}
                            </div>
                        </div>
                    })}
                </div>
            </div>    

            <div className=''>
                <div className='md:grid grid-cols-3 gap-8'>
                    {latestData.filter(e=>e.category==active ).slice(0,6).map((item, index) => {
                        return (
                            <div key={index} className='h-[306px] grid  mb-20'>
                                <div className="bg-hex flex justify-center h-[269.96px]">
                                    <img src={item.url} alt="" />
                                </div>

                                <div className=' flex justify-between items-end text-navy'>
                                    <h4 className='border-b-2'>
                                        {item.info}
                                    </h4>
                                    <div  className='flex  gap-3'>
                                        <h4 >{item.info2}</h4>
                                        <h5 className='text-red-600'>{item.info3}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    </div>
  )
}

export default Latest