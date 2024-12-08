import React, {useState} from 'react'
import productInfoData from './productInfoData'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ProductInfo = () => {

    const tags = [
        {
            btn: "Description",
        },
        {
            btn: "Additional Info",
        },
        {
            btn: "Reviews",
        },
        {
            btn: "Video",
        }
    ]

    const infoIcon = [
        {
            icon: <AiOutlineArrowRight/>
        }
    ]

    const categories = productInfoData.map(item => item.category)
    const [active, setActive] = useState(tags[0].btn)

  return (
    <div className='bg-sky_blue'>

            <div className="md:container md:px-[1.3rem] px-[.8rem] md:py-24 py-2  md:mb-24 mb-12">
                    <div className='hidden lg:block'>
                        <div className=' flex gap-12 text-navy  mb-14 '>
                            {tags.map((item) => {
                                return <div>
                                    <div className='text-lg cursor-pointer hover:text-pink hover:font-semibold font-semibold' onClick={() => {
                                        setActive(item.btn)
                                    }}>
                                        {item.btn}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                    <div>
                        {productInfoData.filter(e=>e.category==active ).map((item) => {
                            return <div>
                                <div className='mt-8'>
                                    <h4 className='text-navy font-bold '>{item.title}</h4>
                                    <p className='my-3 text-tertiary font-josefin'>{item.des}</p>
                                    <div className='text-tertiary'>
                                        <p>{item.des1}</p>
                                        <p className='my-3'>{item.des4}</p>
                                        <p>{item.des3}</p>
                                        <p className='my-3'>{item.des4}</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
            </div>



    </div>
  )
}

export default ProductInfo
