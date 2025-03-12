import Footer from "@/app/components/footer";
import { ProductGrid } from "@/app/components/productGrid/productGrid";
import Title from "@/app/ui/title/Title";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const products = initialData.products;


import React from "react";

export default function ({ params }: Props) {
  const { id } = params;
  const productosFiltrados = products.filter(product => product.gender === id);
  // if (id === "kids") {
  //   notFound();
  // }
  return (
       <>      
            <Title
              title="Tienda"
              subTitle ={` Productos para ${id} `}
              className="mb-2 text-7xl mt-0 text-rose-600 uppercase "
            />
    
            <ProductGrid products={productosFiltrados} />
         
         
        </>
  )
}
