import Title from "@/app/ui/title/Title";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function page() {
  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <Title title="Ordenes" />
      <div className="mb-5">
        <table className="w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre Completo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Estado
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
          <tr className="bg-white border-b transition duration-300 case-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    00001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rafael Orozco
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium text-gray-900">
                    <IoCartOutline className="text-gray-900 "/>
                    <span className=" mx-2 text-green-800">Pagada</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   <Link href={'orders/123'} className="hover:underline">
                   Ver Orden
                   </Link>
                </td>

            </tr>
            <tr className="bg-white border-b transition duration-300 case-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    00001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rafael Orozco
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <IoCartOutline className="text-gray-900"/>
                    <span className=" mx-2 text-green-800">Pagada</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   <Link href={'orders/123'} className="hover:underline">
                   Ver Orden
                   </Link>
                </td>

            </tr>
            <tr className="bg-white border-b transition duration-300 case-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    00001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Rafael Orozco
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <IoCartOutline className="text-gray-900"/>
                    <span className=" mx-2 text-green-800">Pagada</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                   <Link href={'orders/123'} className="hover:underline">
                   Ver Orden
                   </Link>
                </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
