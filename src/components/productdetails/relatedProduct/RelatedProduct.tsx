import React from 'react';

const RelatedProduct = () => {

    const relatedProductData = [
        {
            pic: "/assets/images/related1.png",
            title: "Mens Fashion Wear",
            review: "/assets/images/reviews.png",
            price: "$43.00"
        },
        {
            pic: "/assets/images/related2.png",
            title: "Women’s Fashion",
            review: "/assets/images/reviews.png",
            price: "$67.00"
        },
        {
            pic: "/assets/images/related3.png",
            title: "Wolx Dummy Fashion",
            review: "/assets/images/reviews.png",
            price: "$67.00"
        },
        {
            pic: "/assets/images/related4.png",
            title: "Top Wall Digital Clock",
            review: "/assets/images/reviews.png",
            price: "$51.00"
        },
    ]

    return (
        <div className='md:container md:px-[1.3rem] px-[.8rem] md:mb-32 mb-12'>
            <h2 className='text-navy'>Related Products</h2>
            <div className=' md:flex justify-between  gap-8  '>
                {relatedProductData.map((item) =>{
                    return <div className='mb-8'>
                        <div className='bg-white md:w-[270px] h-[340px]'>
                            <img className=' w-full' src={item.pic} alt="" />
                        </div>
                        <div className='flex items-center justify-between md:mt-5 mt-[88px]'>
                            <h4 className='text-navy font-semibold'>{item.title}</h4>
                            <img src={item.review} alt="" />
                        </div>
                        <h6 className='text-navy'>{item.price}</h6>
                    </div>
                })}
            </div>

            <div className='flex justify-center mt-12 md:mt-28'>
                <img src="/assets/images/logo1.png" alt="" />
            </div>
        </div>
    );
};

export default RelatedProduct;