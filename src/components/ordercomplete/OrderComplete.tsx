import React from 'react'

const OrderComplete = () => {
  return (
    <div>
        <div className='bg-shade2'>
            <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>Order Completed</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . Order Completed</h4>
                </div>
            </div>
        </div>

        <div className=' md:container md:px-[1.3rem] px-[.8rem] md:mt-32 mt-12 md:mb-32  mb-12   '>
            <div className=' w-full flex justify-center relative'>
                <div className='absolute  lg:right-3/4 2xl:right-3/4 hidden lg:block'>
                    <img src="/assets/images/order1.png" alt="" />
                </div>
                <div className='text-center border-dotted border-l-2 border-b-2 lg:w-[720px] 2xl:w-[840px] '>
                    <div className=' flex justify-center'>
                        <img className='w-[70px] md:w-max' src="/assets/images/orderdone.png" alt="" />
                    </div>
                    <div className='absolute -bottom-8 left-3/4 hidden lg:block'>
                        <img src="/assets/images/order2.png" alt="" />
                    </div>
                    <h2 className='md:text-[36px] text-navy md:my-6 my-2'>Your Order Is Completed! </h2>
                    <div className=' w-full flex justify-center'>
                        <p className='md:w-[80%]  text-tertiary'>Thank you for your order! Your order is being processed and will be completed within 3-6
                            hours. You will receive an email confirmation when your order is completed.
                        </p>
                    </div>
                    <button className='my-8'>Continue Shopping</button>
                </div>
            </div>

            <div className=' flex justify-center md:mt-32 mt-12'>
                <img src="/assets/images/logo1.png" alt="" />
            </div>

        </div>


    </div>
  )
}

export default OrderComplete
