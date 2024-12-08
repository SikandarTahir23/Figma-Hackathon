import React from 'react'

const CurtTotal = () => {
  return (
    <div>
      <h2 className=' text-center text-navy'>Card Totals</h2>

        <div className="bg-dark_sky_blue py-9 px-6 mt-6 ">
            <div className=''>
                <div className='text-navy flex items-center justify-between'>
                    <h3>Subtotals:</h3>
                    <h4>£219.00</h4>
                </div>
                <div className='md:w-[350px] border-[1px] mt-2'></div>
            </div>

            <div className='mt-9'>
                <div className='text-navy flex items-center justify-between'>
                    <h3>Totals:</h3>
                    <h4>£325.00</h4>
                </div>
                <div className='md:w-[350px] border-[1px] mt-2'></div>
            </div>

            <div className='flex items-center mt-7 gap-1 text-tertiary'>
                <input className='bg-lightGreen text-lightGreen w-[8px] h-[8px]' type="checkbox" name="" id="" />
                <h6 className='text-[12px]'>Shipping & taxes calculated at checkout</h6>
            </div>

            <button className='w-full mt-11 font-lato font-medium checkout-btn'>Proceed To Checkout</button>

        </div>

        <h2 className=' text-center text-navy my-6'>Calculate Shiping</h2>

        <div className="bg-dark_sky_blue py-6 px-6  ">
            <div className=''>
                <div className='text-navy'>
                    <h3 className='text-tertiary font-medium'>Bangladesh</h3>
                </div>
                <div className='md:w-[350px] border-[1px] mt-2'></div>
            </div>

            <div className='mt-9'>
                <div className='text-navy flex items-center justify-between'>
                    <h3 className='text-tertiary font-medium'>Mirpur Dhaka - 1200</h3>
                </div>
                <div className='md:w-[350px] border-[1px] mt-2'></div>
            </div>

            <div className='mt-9'>
                <div className=' flex items-center justify-between'>
                    <h3 className='text-tertiary font-medium'>Postal Code</h3>
                </div>
                <div className='md:w-[350px] border-[1px] mt-2'></div>
            </div>

            <button className=' mt-11 font-lato font-medium '>Calculate  Shiping</button>

        </div>
    </div>
  )
}

export default CurtTotal
