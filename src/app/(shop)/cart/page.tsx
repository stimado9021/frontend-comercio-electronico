import Title from "@/app/ui/title/Title";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SelectQuanty } from "@/app/components/product/selector-quanty/SelectQuanty";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function page() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0 w-screen">
      <div className="flex flex-col  ">
        <Title title="Carrito De Compra" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          <div className="flex flex-col mt-5  gap-5">
            <span className="text-xl">agregar mas items</span>
            <Link href={"/"} className=" underline mb-5">
              Continuar Comprando
            </Link>

            {productInCart.map((product) => (
              <div className="flex w-full sm:px-0" key={product.slug} >
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                />
                <div className="w-full">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <SelectQuanty quantity={3} />
                  <button className=" underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7  h-[300px] mt-5">
            <h2 className="text-2xl mb-2">Orden de Compra</h2>
            <div className="grid grid-cols-2">
              <span>Nro</span>
              <span className="text-right">3 articulos</span>

              <span>subtotal</span>
              <span className="text-right">100</span>

              <span>Impuesto 15%</span>
              <span className="text-right">100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">120</span>          
            </div>
            <div className="mb-5 mt-5 w-full">
              <Link 
              className="flex btn-primary justify-center"
              href={'/checkout/address'}>
                Checkout
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
