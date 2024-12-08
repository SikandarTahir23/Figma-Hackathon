import React from 'react'

const faq = () => {

    const faqData = [
        {
            title: "Eu dictumst cum at sed euismood condimentum?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Magna bibendum est fermentum eros.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Odio muskana hak eris conseekin sceleton?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
        {
            title: "Elit id blandit sabara boi velit gua mara?",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
        },
    ]

  return (
    <div>
      
      <div className='bg-shade2'>
            <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
                <h2 className='text-navy'>Faq</h2>
                <div className='flex gap-2 '>
                <h4>Home</h4>
                <h4>. Pages</h4>
                <h4 className='text-pink pb-[114px]'> . Faq</h4>
                </div>
            </div>
        </div>

        <div className='md:container md:px-[1.3rem] px-[.8rem] md:grid grid-cols-2 gap-16 md:mt-32 mt-12 mb-10 md:mb-32'>

            <div className=''>
                <h2 className='text-navy font-bold'>Generel Information</h2>

                <div className=''>
                    {faqData.map((item) => {
                        return <div>
                            <div className='my-6 md:my-16'>
                                <h3 className='text-navy '>{item.title}</h3>
                                <h4 className='text-tertiary md:mt-4'>{item.des}</h4>
                            </div>
                        </div>
                    })}
                </div>
            </div>



            <div className='bg-shade2 rounded-md'>
                <h3 className='text-navy text-[24px] md:p-12 p-2 pt-5  mt-5'>Ask a Question</h3>
                <div className='mt-4 md:p-12 p-2 pb-7'>
                    <input className='border-gray-300 h-[50px] rounded-md w-full md:my-6 my-4' placeholder='Your Name' type="text" name="" id="" />
                    <input className='border-gray-300 h-[50px] rounded-md w-full md:my-6' placeholder='Subject*' type="text" name="" id="" />
                    <textarea className='w-full border-gray-300 h-[197px] rounded-md md:my-6 my-4' placeholder='Type Your Message*' name="comment" form="usrform"></textarea>

                    <button className='md:my-6'>Send Mail</button>

                </div>
            </div>

        </div>

        <div className='container px-[1.3rem] flex justify-center mb-[32px]'>
            <img src="/assets/images/logo1.png" alt="" />
        </div>



    </div>
  )
}

export default faq
