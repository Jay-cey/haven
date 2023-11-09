'use client';   
import { useState } from 'react';
import Image from "next/image";

function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='w-full h-fit'>
        <div className='w-full flex h-14 items-center text-left'>
            <p className='w-[96%]'>{props.faq}</p>
            <button onClick={handleClick}>
                <Image src={'/arrowDown.svg'} alt='' width={32} height={32} className='float-right' />
            </button>
        </div>

        {isOpen && (
            <div className='w-full pb-2 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iure porro nostrum perferendis nihil quo temporibus animi expedita facilis atque! Sunt, possimus sapiente voluptate incidunt dolorem aut suscipit repellendus tempore a nesciunt maxime aspernatur inventore maiores ad rem aperiam neque ullam blanditiis perferendis saepe facilis ducimus aliquam. Nesciunt optio voluptatum nulla unde quis temporibus maxime cupiditate quo voluptates impedit? Fuga praesentium, ullam reprehenderit, dicta dolores id repudiandae fugit explicabo molestias facere eos?
            </div>
        )}
    </div>
  )
}

export default Accordion
