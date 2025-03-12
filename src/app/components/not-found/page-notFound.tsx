import Link from 'next/link'
import React from 'react';
import Image from 'next/image';


export default function PageNotFound() {
  return (
  

     <div className='flex flex-col md:flex-row min-h-screen w-full justify-center items-center'>
      <div className='text-center px-5  mx-5'>
        <h2 className='text-9xl'>404</h2>
        <p className='font-semibold text-xl'>Whoops lo sentimos mucho</p>
        <p className='font-light'>
          <span>puedes regresar al </span>
          <Link 
          href={'/'}
          className='font-normal hover:underline transition-all'
          >
              Inicio
          </Link>
        </p>
      </div>

      <div className='px-5 mx-5'>
        <Image src={'/imgs/starman_750x750.png'} alt="Starman" className='p-5 sm:p-0' width={550} height={550} />
      </div>

    </div>

  
  )
}
