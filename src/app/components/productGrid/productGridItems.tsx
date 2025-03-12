'use client'
import { Product } from "@/app/interface/product";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItems = ({ product }: Props) => {
  const [displayImage,setDisplayImage]=useState(product.images[0])
  return (
   
    <div className=" rounded-md overflow-hidden fade-in bg-fuchsia-400 " key={product.slug}>
     <Link href={`/product/${product.slug}`} >
      <Image
        src={`/products/${displayImage}` }
        alt={product.title}
        className="w-full object-cover rounded"
        width={150}
        height={150}
        onMouseEnter={()=>setDisplayImage(product.images[1])}
        onMouseLeave={()=>setDisplayImage(product.images[0])}
      />
      </Link>
      <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`} className="hover:text-yellow-400">
                    <strong className="text-2xl">{product.title}</strong>
                </Link>
                <span className="text-2xl text-white">{product.price}</span>

      </div>
    </div>
  );
};
