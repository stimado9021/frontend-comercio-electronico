'use client'
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
interface Props{
    quantity: number;
}
export const SelectQuanty = ({ quantity }: Props) => {
    const [count,setCount] = useState(quantity);
    const onQuantityChange =(value:number)=>{
        if(count + value < 1) return;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setCount(count + value);
    }
  return (
    <div className='flex'>
        <button onClick={()=> onQuantityChange(-1)}>
            <IoRemoveCircleOutline />
        </button>
        <span className=' rounded w-20 mx-3 px-5 bg-gray-100 text-center'>
            {count}
        </span>
        <button onClick={()=> onQuantityChange(1)}>
            <IoAddCircleOutline />
        </button>
    </div>
  )
}
