import React from 'react';
import Card from './Card';
import { FiChevronLeft , FiChevronRight } from 'react-icons/fi';


function Testimonials(props){

    let reviews = props.reviews;
    const [selRev , setSelRev] = React.useState(0);

    function leftshiftHandler(){
        setSelRev((prev)=>{
            if(prev===0){
                return reviews.length-1;
            }
            else{
                return prev-1;
            }
        })
    }



    function rightshiftHandler(){
        setSelRev((prev)=>{
            if(prev===reviews.length-1){
                return 0;
            }
            else{
                return prev+1;
            }
        })
    }

    function surpriseHandler(){
       let randomIndex =  Math.floor(Math.random()*reviews.length);
         setSelRev(randomIndex);
    }

    return(
        <div className='w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>

            <Card review ={reviews[selRev]}  ></Card>

            <div className='flex justify-center text-3xl mt-9 gap-3 text-violet-400 font-bold'>
                
                <button onClick={leftshiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft/>
                </button>

                <button>
                    <FiChevronRight onClick={rightshiftHandler} className='cursor-pointer hover:text-violet-500'/>
                </button>

            </div>

            <div className='mt-6'>
                <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'> Surprise Me</button>
            </div>

        </div>
    )
}


export default Testimonials;