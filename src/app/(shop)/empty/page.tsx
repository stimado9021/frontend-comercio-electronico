import Link from 'next/link'
import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

export default function page() {
  return (
    <div className='flex justify-center items-center h-[600px]'>
      <IoCartOutline size={80} className='mx-5' />
      <div className='flex flex-col items-center'>
        <h1 className=' uppercase text-2xl font-semibold'>tu carrito esta vacio </h1>
        <Link href={'/'} className={'text-xl'}>
        Regresar
        </Link>

      </div>

    </div>
  )
}


