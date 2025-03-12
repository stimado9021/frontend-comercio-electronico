import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
     
        <h1 className="text-center text-pink-600">
          <Link href={'/'}>BlackSoft Inc Software Develop </Link>
          | copyrigth { new Date().getFullYear() }
        </h1>
     
    </div>
  );
}
