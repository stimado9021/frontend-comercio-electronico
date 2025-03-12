'use client'  
import { useUIStore } from "@/app/store/ui/ui-store";
import Link from "next/link";
import React from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export default function TopMenu() {
  const openSideMenu = useUIStore(state=>state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full h-16 right-2  bg-white mb-10">
      <div className="m-2 p-2 rounded-md transition-all hover:bg-gray-400">
        <Link href="/">
          <span className="antialiased font-bold">TESLO</span>
          <span> | SHOP</span>
        </Link>
      </div>
      <div className=" hidden sm:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400"
        >
          Hombres
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400"
        >
          Mujeres
        </Link>
        <Link
          href="/category/kid"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400"
        >
          Niños
        </Link>
        <Link
          href="/category/unisex"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-400"
        >
          Unisex
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5h-5 " />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className=" relative">
            <span className=" absolute text-xs  rounded-full px-1 font-bold -top-2 bg-blue-700 text-white left-2 mb-2">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button 
        onClick={()=> openSideMenu()}
        className="m-2 p-2 rounded-md transition-all hover:bg-gray-400 ">
          Menu
        </button>
      </div>
    </nav>
  );
}
