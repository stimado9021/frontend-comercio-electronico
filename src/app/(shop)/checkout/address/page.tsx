import Title from "@/app/ui/title/Title";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-10 px-4 sm:px-0 ">
      <div className="w-full xl:w-[1000px]  flex flex-col justify-center text-left sm:w-full ">
        <Title
          title="Checout Sales"
          subTitle="Direccion De Entrega"
          className="text-2xl text-center"
        />
        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2 p-5 mt-10 bg-white p-12 shadow-xl">

          <div className="flex flex-col pb-2 ">
            <span>Nombres</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Apellidos</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Direccion</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Direccion 2</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Codigo Postal</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Ciudad</span>
            <input type="text" className="p-2 border rounded-md bg-white" />
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Pais</span>
            <select className="p-2 border rounded-md bg-white sm:screen">
            <option value=""> [Seleccione ] </option>
              <option value="VE">Venezuela</option>
              <option value="CO">Colombioa</option>
              <option value="BRA">Brasil</option>
              <option value="PE">Peru</option>
            </select>
          </div>

          <div className="flex flex-col pb-2 ">
            <span>Telefono</span>
            <input type="text" className="p-2 border rounded-md bg-white md:w-full " />
          </div>

          <div className="flex flex-col sm:mt-10">
           <Link 
           href={'/checkout'} 
           className="btn-primary flex w-full justify-center mb-10 sm:mb-0 sm:w-1/2"
           >
              Siguiente           
           </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
