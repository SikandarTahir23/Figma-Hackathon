import React, {useState} from 'react'
import { BsCheck2 } from 'react-icons/bs'

const Discount = () => {
    const discountData = [
        {
            category : "Wood Chair",
            title: "20% Discount Of All Products",
            des: "Eams Sofa Compact",
            peragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
            list: "Material expose like metals",
            list2: "Clear lines and geomatric figures",
            list3: "Simple neutral colours.",
            list4: "Material expose like metals",
            btn: "Shop Now"
        },
        {
            category : "Plastic Chair",
            title: "23% Discount Of All Products",
            des: "Eams Sofa Compact",
            peragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
            list: "Material expose like metals",
            list2: "Clear lines and geomatric figures",
            list3: "Simple neutral colours.",
            list4: "Material expose like metals",
            btn: "Shop Now"
        },
        {
            category : "Sofa Collection",
            title: "24% Discount Of All Products",
            des: "Eams Sofa Compact",
            peragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
            list: "Material expose like metals",
            list2: "Clear lines and geomatric figures",
            list3: "Simple neutral colours.",
            list4: "Material expose like metals",
            btn: "Shop Now"
        },
    ]

    const tags = [
        {
            btn: "Wood Chair",
        },
        {
            btn: "Plastic Chair",
        },
        {
            btn: "Sofa Collection",
        },
    ]

    const categories = discountData.map(item => item.category)
    const [active, setActive] = useState(tags[0].btn)

  return (
    <div className='md:container md:wrapper px-[.8rem]'>
        <h1 className='text-navy text-center'>Discount Item</h1>

        <div className='hidden lg:block'>
            <div className=' flex justify-center gap-12 text-navy  mb-14  '>
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

        <div className='md:flex items-center '>
            <div>
                {discountData.filter(e=>e.category==active ).map((item, index) => {
                        return (
                            <div key={index} className=' grid  mb-20'>
                                <div className="md:flex justify-center">
                                    <div className=''>
                                        <h2 className='text-navy md:text-[35px] text-[24px] '>{item.title}</h2>
                                        <h3 className='text-pink font-semibold  mb-2 md:mb-6'>{item.des}</h3>
                                        <p className='text-light_gray1 md:w-[65%]'>{item.peragraph}</p>

                                        <div className="md:flex">
                                            <div className=' mt-4  '>
                                                <div className='flex items-center text-navy gap-1'>
                                                    <BsCheck2/> 
                                                    <h4 className='text-light_gray1 mr-16 '> {item.list}</h4>
                                                </div>
                                                <div className='flex items-center text-navy gap-1 mt-3'>
                                                    <BsCheck2/> 
                                                    <h4 className='text-light_gray1'>{item.list3}</h4>
                                                </div>
                                            </div>

                                            <div className=' mt-4'>
                                                <div className='flex items-center text-navy gap-1'>
                                                    <BsCheck2/> 
                                                    <h4 className='text-light_gray1'>{item.list2}</h4>
                                                </div>
                                                <div className='flex items-center text-navy gap-1 mt-3'>
                                                    <BsCheck2/> 
                                                    <h4 className='text-light_gray1'>{item.list4}</h4>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <button className='mt-8'>{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )
                })}
            </div>

            <div className=''>
                <img  src="/assets/images/discount.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Discount