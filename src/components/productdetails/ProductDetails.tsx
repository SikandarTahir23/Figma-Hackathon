import React from 'react'
import ProductView from './product/ProductView'
import ProductInfo from './productInfo/ProductInfo'
import RelatedProduct from './relatedProduct/RelatedProduct'

const ProductDetails = () => {
  return (
    <div>
            <div className='bg-shade2'>
                <div className="md:container md:px-[1.3rem] px-[.8rem] pt-[98px]">
                    <h2 className='text-navy'>Product Details</h2>
                    <div className='flex gap-2 '>
                    <h4>Home</h4>
                    <h4>. Pages</h4>
                    <h4 className='text-pink pb-[114px]'> . Product Details</h4>
                    </div>
                </div>
            </div>

            <ProductView/>
            <ProductInfo/>
            <RelatedProduct/>
    </div>
  )
}

export default ProductDetails
