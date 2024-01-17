import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';


function Card(props){

    let review = props.review;

    return(
        <div className="flex flex-col relative md:relative">
            
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className="aspect-square rounded-full w-[140px] z-20" src={review.image} alt="" />
                <div className='rounded-full w-[140px] h-[140px] bg-violet-500  absolute top-[-5px] z-[-10] left-[5px]'></div>
            </div>

            <div className='text-center mt-7'>
                <h3 className='font-bold text-2xl capitalize tracking-wider'>{review.name}</h3>
                <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
            </div>

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteLeft/>
            </div>

            <div className='text-center text-slate-500  mt-4'>
                {review.text}
            </div>

            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;