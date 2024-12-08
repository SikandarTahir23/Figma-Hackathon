import React from 'react'
import DemoProduct from './demoproduct/DemoProduct'
import ShippingInfo from './shippingInfo/ShippingInfo'

const Demo = () => {
  return (
    <div>

        <div className='bg-shade2'>
            <div className="lg:container lg:px-[1.3rem] px-[.8rem] py-[124px]">
                <h2 className='text-navy'>Hekto Demo</h2> 
            </div>
        </div>

        <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-8 lg:mb-32'>
            <div className=' lg:w-[770px]'>
                <ShippingInfo/>
            </div>

            <div className='lg:w-[400px] '>
                <DemoProduct/>
            </div>
        </div>

    </div>
  )
}

export default Demo
