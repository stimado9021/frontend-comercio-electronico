import React from 'react'

interface Props{
    title: string;
    subTitle?:string;
    className?:string;
}
export default function Title({title, subTitle , className} : Props) {
    
  return (
    <>
    
        <div>
            <h1 className={`${className} ` } >
                {title}
            </h1>
            <p className='text-xl text-center'>{subTitle}</p>
        </div>
    </>
  )
}
