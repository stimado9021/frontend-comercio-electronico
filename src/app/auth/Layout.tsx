import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-orange-500">
      <div className=" w-full sm:w-[350px px-10]">{children}</div>
    </div>
  );
}

export default Layout;
