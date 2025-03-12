//import Image from "next/image";

import { ProductGrid } from "../components/productGrid/productGrid";


import Title from "../ui/title/Title";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>      
        <Title
          title="Tienda"
          subTitle="todos los productos"
          className="mb-2 text-7xl mt-0 text-rose-600"
        />

       <ProductGrid products={products} />
     
     
    </>
  );
}
