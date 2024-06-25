import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

const ProductCard: React.FC<propsType> = (
    {img, title, desc, rating, price}
) => {

  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            </div>
        );
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
        );  
      default:
        return null;
    }
  }

  return (
    <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
        <div>
            <Image className='w-full h-auto' src={img} width={200} height={300} alt={title}/>
        </div>
        <div className='space-y-2 py-2'>
          <h2 className='text-accent font-medium uppercase'>{title}</h2>
          <p className='text-gray-500 max-w-[150px]'>{desc}</p>
          <div>{generateRating(rating)}</div>
          <div className='font-bold flex gap-4'>
            ${price}
            <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
          </div>
        </div>
    </div>
  )
}

export default ProductCard