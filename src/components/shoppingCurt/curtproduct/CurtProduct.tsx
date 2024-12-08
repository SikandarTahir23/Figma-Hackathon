import React from 'react'
import curtproductdata from './curtproductdata'

const CurtProduct = () => {
  return (
    <div>
         <div className='hidden lg:block'>
            <div className='flex mb-12'>
                <div className='w-[290px] '>
                    <h3 className='text-navy text-[20px]'>Product</h3>
                </div>
                
                <div className='w-[170px] ml-6'>
                    <h3 className='text-navy text-[20px]'> Price</h3>
                </div>

                <div className='w-[150px] '>
                    <h3 className='text-navy text-[20px]'>Quantity</h3>
                </div>

                <div className='w-[60px] ml-9'>
                    <h3 className='text-navy text-[20px]'>Total</h3>
                </div>
            </div>
         </div>

      <div className=''>

            {curtproductdata.map((item) => {
                return <div>
                            <div className='flex items-center  md:mb-8 mb-4'>
                                    <div className='w-[60px] md:w-[90px] '>
                                        <img src={item.pic} alt="" />
                                    </div>


                                    <div className=' w-[120px]  md:w-[170px] ml-1 md:ml-4 '>
                                        <h5 className='text-[10px] md:text-[14px] font-josefin font-bold'>{item.title}</h5>
                                        <p className='text-[10px] md:text-[12px] text-tertiary'>Color: <span className='text-[12px] md:text-[14px]'>{item.color}</span></p>
                                        <p className='text-[10px] md:text-[12px] text-tertiary'>Size: <span className='text-[12px] md:text-[14px]'>{item.size}</span></p>
                                    </div>


                                    <div className='md:ml-10 md:w-[55px] '>
                                        <h5 className='text-[10px] md:text-[14px] font-bold text-navy'>{item.price}</h5>
                                    </div>


                                    <div className='md:ml-28  ml-4 md:w-[60px] flex items-center justify-between bg-lightGray'>
                                        <div className='bg-darkGray px-[5px] text-lightYellow'>
                                            <h5>-</h5>
                                        </div>
                                        <h5 className='text-[12px] text-lightYellow'>{item.quantity}</h5>
                                        <div className='bg-darkGray px-1 text-lightYellow'>
                                            <h5>+</h5>
                                        </div>
                                    </div>

                                    <div className='md:ml-32 ml-4 md:w-[60px] '>
                                        <h5 className='text-navy font-bold'>{item.totalPrice}</h5>
                                    </div>
                                    
                        </div>

                        <div className='border-[1px] -mt-2 md:mb-6 mb-2'></div>
                </div>
            })}
            
      </div>

        <div className='flex justify-between mt-2 md:mt-8 mb-12'>
            <button>Update Curt</button>
            <button>Clear Curt</button>
        </div>      
      
    </div>
  )
}

export default CurtProduct
