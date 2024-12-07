import React from 'react'
import Image from 'next/image';

interface propsTypes {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsTypes> = ({ title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-full sm:w-[300px] md:w-[350px] p-4' data-aos="zoom-out-up">
      <div className="relative w-full h-[250px] sm:h-[300px]">
        <Image 
          className="object-cover w-full h-full" 
          src={img} 
          width={350} 
          height={350} 
          alt={title} 
        />
      </div>

      <div className='space-y-4 mt-4'>
        <div className='text-xl sm:text-2xl font-extralight'>{title}</div>
        <div className='text-sm sm:text-base text-gray-600'>{desc}</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((el) => (
            <span key={el} className='bg-accent text-white px-3 py-1 text-xs sm:text-sm rounded-full'>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card;
