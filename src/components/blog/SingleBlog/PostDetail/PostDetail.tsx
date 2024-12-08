import { title } from 'process';
import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr'
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'

const PostDetail = () => {

  const productData = [
    {
      pic: "/assets/images/detailproduct1.png",
      title: "Quam sed",
      offerPrice: "$32.00",
      regularPrice: "$56.00",
      review: "/assets/images/reviews.png"
    },
    {
      pic: "/assets/images/detailproduct2.png",
      title: "Tristique sed",
      offerPrice: "$32.00",
      regularPrice: "$56.00",
      review: "/assets/images/reviews.png"
    },
    {
      pic: "/assets/images/detailproduct3.png",
      title: "A etiam",
      offerPrice: "$32.00",
      regularPrice: "$56.00",
      review: "/assets/images/reviews.png"
    },
    {
      pic: "/assets/images/detailproduct4.png",
      title: "Mi nisi",
      offerPrice: "$32.00",
      regularPrice: "$56.00",
      review: "/assets/images/reviews.png"
    },
  ]

  const postData = [
    {
      pic: "/assets/images/postlist1.png",
      title: "Sapien ac",
      date: "Jan 09 2020",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur."
    },
    {
      pic: "/assets/images/postlist2.png",
      title: "Augue conva",
      date: "Aug 18 2020",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur."
    },
  ]

  return (
    <div>
      <div>
        <img src="/assets/images/blogpage1.png" alt="" />

        <div className='flex  gap-6 lg:mt-7 my-3'>
                <div className='flex items-center  gap-2'>
                      <img src="/assets/icons/pen.png" alt="sabir" />
                      <h6 className=' bg-lightPink px-6 rounded-sm text-navy font-medium'>Surf Auxion</h6> 
                </div>

              <div className='flex items-center gap-2'>
                    <img src="/assets/icons/calendar.png" alt="" />
                    <h6 className='bg-lightYellow2 px-6 rounded-sm text-navy font-medium'>Aug 09 2020</h6>
              </div>             
        </div>

        <h3 className='text-[30px] text-navy font-josefin mt-4'>Mauris at orci non vulputate diam tincidunt nec.</h3>

        <p className='text-tertiary lg:mt-6 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>

        <p className='text-tertiary lg:mt-16 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

        <div className='lg:mt-12 mt-6 bg-lightGray2 px-2 py-8 border-l-2 border-pink '>
          <p className='font-josefin  text-[18px]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat

          toamk risusu”</p>
        </div>

        <div className='lg:flex gap-8 lg:mt-10 mt-6  w-full overflow-hidden'>
          <div className='flex-1 '>
            <img className='mb-8 lg:mb-0 w-full' src="/assets/images/postdetail1.png" alt="" />
          </div>
          <div className='flex-1 '>
            <img className='w-full' src="/assets/images/postdetail2.png" alt="" />
          </div>
          
          
        </div>

        <p className='lg:mt-12 mt-6 text-tertiary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

        <div className='lg:flex gap-3 lg:mt-20 mt-6'>
          {productData.map((item) => {
            return <div className=' mb-6 lg:mb-0'>
              <div>
                <img className='w-full' src={item.pic} alt="" />
              </div>
              <div>
                <h4 className='text-[19px]'>{item.title}</h4>
                <div className='flex items-center justify-between'>
                  <div className='flex text-navy gap-2'>
                      <h4>{item.offerPrice}</h4>
                      <h4 className='text-pink line-through'>{item.regularPrice}</h4>
                  </div>
                  <div>
                    <img src={item.review} alt="" />
                  </div>

                </div>

              </div>
            </div>
          })}
        </div>

        <p className='text-tertiary lg:mt-12 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
        
        <p className='text-tertiary lg:mt-12 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

        <div className='border my-12'></div>

        <div className='flex  w-full  px-4 justify-center pb-8 '>
          <div className='bg-purple text-white rounded-full p-2'>
              <GrFacebookOption/>
          </div>
          <div className='bg-pink text-white rounded-full p-2 mx-4'>
              <AiOutlineInstagram/>
          </div>
          <div className='bg-dark_cyan text-white rounded-full p-2'>
              <AiOutlineTwitter/>
          </div>
        </div>

        <div className='flex justify-between bg-lightGray2 py-4 px-6'>

          <div className='text-tertiary flex items-center gap-1'>
            <BsArrowLeft/>
            <h4>Previous Post</h4>
          </div>


          <div className='text-tertiary flex items-center gap-1'>
              <BsArrowRight/>
              <h4>Next Post</h4>
          </div>


        </div>



        <div className='mt-32 '>
          {postData.map((item) => {
            return <div className='flex items-center gap-4  mb-7 shadow-primary p-3 '>
              <div>
                <img src={item.pic} alt="" />
              </div>

              <div className=' '>
                <div className='flex items-center gap-16 '>
                    <h3 className='font-josefin text-navy'>{item.title}</h3>
                    <h6 className='text-[12px] text-tertiary'>{item.date}</h6>
                </div>
                <p className='text-[12px] text-tertiary w-[90%]'>{item.des}</p>
              </div>
            </div>
          })}
        </div>

        <div className='lg:w-[725px] lg:mt-36 mt-16'>
          <div className='flex gap-8'>
            <input placeholder='Your Name*' className='w-full border-gray-400' type="text" name="" id="" />
            <input placeholder='Write Your Email*' className='w-full border-gray-400' type="email" name="" id="" />
          </div>
          <textarea className='w-full border-gray-300 h-[197px] rounded-lg my-6' placeholder='Write Your Comment*' name="comment" form="usrform"></textarea>
          <div className='flex items-center gap-2'>
              <input className='w-[10px] h-[10px] rounded-sm border-gray-400 text-pink'  type="checkbox" name="" id="" />
              <p className='text-[13px]'>Save my name, email, and website in this browser for the next time I comment.</p>
          </div>

          <button className='w-full mt-12 '>Continue Shipping</button>
        </div>


        <div className='flex justify-center my-12'> 
          <img src="/assets/images/logo1.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default PostDetail
