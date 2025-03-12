import { ProductGrid } from "@/app/components/productGrid/productGrid";
import Title from "@/app/ui/title/Title";
import { initialData } from "@/seed/seed";
import React from "react";

const products = initialData.products;

interface Props {
  params: {
    id: string;
  };
}

async function CategoryPage({ params }: Props) { // 1. Añade un nombre a la función
  const { id } = params;
  const productosFiltrados = products.filter(
    (product) => product.gender === id
  );

  return (
    <>
      <Title
        title="Tienda"
        subTitle={` Productos para ${id} `}
        className="mb-2 text-7xl mt-0 text-rose-600 uppercase "
      />

      <ProductGrid products={productosFiltrados} />
    </>
  );
}

CategoryPage.displayName = 'CategoryPage'; // 2. Añade displayName

export default CategoryPage; // 3. Exporta la función con nombre