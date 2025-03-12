import { SelectQuanty } from "@/app/components/product/selector-quanty/SelectQuanty";
import { SelectorSize } from "@/app/components/product/selector-size/SelectorSize";
import { ProductMobileSlideShow } from "@/app/components/product/slideshow/productMobilSlideShow";
import { ProductSlideShow } from "@/app/components/product/slideshow/productSlideShow";

import { initialData } from "@/seed/seed";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}
export default function page({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="  grid md:grid-cols-3 gap-3 ">
      <div className="col-span-1   md:col-span-2  ">
        <ProductMobileSlideShow title={product.title} images={product.images} className="block md:hidden"/>
        <ProductSlideShow title={product.title} images={product.images} className=" hidden md:block" />
      </div>

      <div className="col-span-1 px-5 p-5">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="text-lg mb-5">{product.price}</p>
        <SelectorSize
          selectedSize={product.sizes[0]}
          availaibleSize={product.sizes}
        />
        <SelectQuanty quantity={2} />
        <Link href={'/cart'}>
         <button className="btn-primary mb-5 my-5">Add To Cart</button>
        </Link>
       
        <h2 className="font-bold">description</h2>
        <p className="font-light p-3">{product.description}</p>
      </div>
    </div>
  );
}
