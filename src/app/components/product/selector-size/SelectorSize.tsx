import React from "react";
import { initialData } from "@/seed/seed";
import { clsx } from "clsx";
interface Props {
  selectedSize: string;
  availaibleSize: string[];
}
export const SelectorSize = ({ selectedSize, availaibleSize }: Props) => {
  //const Sizes = initialData.products.find(product => product.sizes);

  return (
    <div className="my-5">
      <h1 className="font-bold mb-4">Tallas Disponibles</h1>
      {availaibleSize.map((size) => {     
       return(
        <button
        key={size}
        className={clsx("mx-2 hover:underline text-lg", {
          underline: size === selectedSize,
        })}
      >
        {size}
      </button>
       )
      })}
    </div>
  );
};
