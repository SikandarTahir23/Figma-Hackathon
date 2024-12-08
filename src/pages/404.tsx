import React from 'react'

const NotFound = () => {
  return (
    <>
    <div>
      <div className='bg-shade2'>
            <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>404 Not Found</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . 404 Not Found</h4>
                </div>
            </div>
        </div>

        <div className='md:container md:px-[1.3rem] px-[.8rem] flex justify-center mt-16'>
            <div>
                <img src="/assets/images/404.png" alt="" />
                <div className='my-16 flex justify-center text-center '>
                    <div>
                        <h3 className='text-[24px] text-navy mb-20'>oops! The page you requested was not found!</h3>
                        <a className='bg-pink text-white font-josefin py-4 px-8 rounded-md '  href="/">Back To Home</a>
                    </div>
                </div>

                <div className='py-16'>
                    <img src="/assets/images/logo1.png" alt="" />
                </div>
            </div>

        </div>

        





    </div>
    </>
    
  )
}

export default NotFound