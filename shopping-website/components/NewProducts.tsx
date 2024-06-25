import React from 'react'
import ProductCard from './ProductCard'

function NewProducts() {

    const productData = [
        {
            img: "/product-6.png",
            title: "Jacket",
            desc: "Men yarn Fleece full-Zip Jacket",
            rating: 4,
            price: "45.00",
        },
        {
            img: "/product-11.png",
            title: "Skirt",
            desc: "Black Floral Wrap Midi Skirt",
            rating: 4,
            price: "55.00",
        },
        {
            img: "/product-8.png",
            title: "Party Wear",
            desc: "Women's Party Wear Shoes",
            rating: 3,
            price: "25.00",
        },
        {
            img: "/product-5.png",
            title: "Jacket",
            desc: "Pure Garment Dyed Cotton Lady Jacket",
            rating: 4,
            price: "45.00",
        },
        {
            img: "/product-7.png",
            title: "Casual",
            desc: "Casual Smart Shoes",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/product-10.png",
            title: "Watches",
            desc: "Smart Watches Vital Plus",
            rating: 4,
            price: "100.00",
        },
        {
            img: "/product-9.png",
            title: "Watches",
            desc: "Pocket Watch Leather Pouch",
            rating: 4,
            price: "120.00",
        },
    ]
  return (
    <div className='container pt-16'>
    <h2 className='font-medium text-2xl pb-4'>New Product</h2>
    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
      {productData.map((item, index) => (
        <ProductCard 
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  </div>
  )
}

export default NewProducts