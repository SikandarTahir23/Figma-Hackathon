import React from 'react'

const MyAccount = () => {
  return (
    <div>

        <div className='bg-shade2'>
            <div className="lg:container lg:px-[1.3rem] px-[.8rem] pt-[98px]"> 
                <h2 className='text-navy'>My Account</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . My Account</h4>
                </div>
            </div>
        </div>


        <div className='lg:container lg:px-[1.3rem] flex justify-center lg:mt-28 mt-12 mb-12 lg:mb-28'>
                <div className='shadow-primary w-[550px] lg:p-12 p-3'> 

                        <div className='text-center'>
                            <h2>Login</h2>
                            <p className='text-tertiary'>Please login using account detail bellow.</p>
                        </div>
                        <div className='lg:mt-9 mt-4'>
                            <input className='w-full border-gray-300 border-2 mb-6' placeholder='Email Address' type="email" name="" id="" />
                            <input className='w-full border-gray-300 border-2' placeholder='Password' type="password" name="" id="" />
                        </div>
                        <h5 className='text-[17px] text-tertiary mt-3 mb-6'>Forgot your password?</h5>
                        <button className='w-full'>Sing In</button>
                          <h5 className='text-[17px] text-tertiary text-center mt-7'>Don’t have an Account?Create account</h5>
                </div>
        </div>

        <div className='flex justify-center lg:mb-28 mb-12'>
            <img src="/assets/images/logo1.png" alt="" />
        </div>


    </div>
  )
}

export default MyAccount
