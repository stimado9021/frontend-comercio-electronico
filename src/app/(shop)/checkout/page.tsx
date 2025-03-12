import Title from "@/app/ui/title/Title";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import React from "react";


const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function Page() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0 w-screen">
      <div className="flex flex-col  ">
        <Title title="Verificar Orden" />
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 ">
          <div className="flex flex-col mt-5  gap-5 bg-white p-12 shadow-2xl">
            <span className="text-xl">Ajustar Elementos</span>
            <Link href={"/cart"} className=" underline mb-5">
              Editar Carrito
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
                  <p>${product.price} x 3</p>
                  <strong>SubTotal  {product.price * 3}</strong>
                  
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7  h-[530px] mt-5">
            <h2 className="text-2xl">Direccion de entrega</h2>
            <div className="mb-10">
              <p>Rafael Orozco</p>
              <p>calle 44 k 5b</p>
              <p>barrio buenos aires</p>
              <p>zona metropilitana</p>
              <p>barranquilla</p>
              <p>CP 08002</p>
              <p>902190219021</p>




            </div>
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
              <p className="text-xs mb-3">Al hacer click en Colocar Orden, aceptas nuestros <a href="#" className=" underline">Terminos y Condiciones de Uso </a> y <a href="#" className=" underline">Politicas de Privacidad </a> </p>
              <Link 
              className="flex btn-primary justify-center"
              href={`/orders/123`}>
                Checkout
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

