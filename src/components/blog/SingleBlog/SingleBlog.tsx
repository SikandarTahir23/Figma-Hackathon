import React from 'react'
import BlogSider from './BlogSidebar/BlogSider'
import PostDetail from './PostDetail/PostDetail'

const SingleBlog = () => {
  return (
    <div>

            <div className='bg-shade2'>
                <div className="lg:container lg:px-[1.3rem] px-[.8rem] pt-[98px]">
                    <h2 className='text-navy'>Single Blog</h2>
                    <div className='flex gap-2 '>
                        <h4>Home</h4>
                        <h4>. Pages</h4>
                        <h4 className='text-pink pb-[114px]'> . Single Blog</h4>
                    </div>
                </div>
            </div>

            <div className='lg:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-5 lg:mt-20 mt-8'>
                <div className='lg:w-[900px]'>
                    <PostDetail/>
                </div>
                <div className='lg:w-[450px] '>
                    <BlogSider/>
                </div>
            </div>

      
    </div>
  )
}

export default SingleBlog
