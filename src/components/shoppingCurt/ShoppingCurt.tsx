import React from 'react';
import CurtProduct from './curtproduct/CurtProduct';
import CurtTotal from './curtTotal/CurtTotal';

const ShoppingCurt = () => {
    return (
        <>
        <div className='bg-shade2'>
            <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>Shopping Curt</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . Shopping Curt  </h4>
                </div>
            </div>
        </div>


        
        <div className='md:container md:px-[1.3rem] px-[.8rem]'>

            <div className='md:flex justify-between gap-8 md:mt-28 mt-12  md:mb-28 mb-12'>

                <div className=' md:w-[990px]'>
                    <CurtProduct/>
                </div>


                <div className='md:w-[400px] '>
                    <CurtTotal/>
                </div>

            </div>

        </div>

        </>
    );
};

export default ShoppingCurt;