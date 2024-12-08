import React from 'react'

const Unique = () => {
  return (
    <div className='bg-ugsadug'>
        <div className='md:container md:wrapper md:flex px-[.8rem] pb-10 md:pb-0'>
            <div>
                <img src="/assets/images/unique1.png" alt="" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h2 className='text-navy'>Unique Features Of leatest &<br/>
                    Trending Poducts</h2>
                    <li>All frames constructed with hardwood solids and laminates</li>
                    <li>Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</li>
                    <li>Arms, backs and seats are structurally reinforced</li>
                    
                    <div className='flex gap-x-5 mt-10'>
                        <button>Add To Cart</button>

                        <div>
                            <h5 className='text-navy font-semibold'>B&B Italian Sofa</h5>
                            <h5>$32.00</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Unique