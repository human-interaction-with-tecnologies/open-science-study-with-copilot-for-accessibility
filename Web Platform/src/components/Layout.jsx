import React from "react";
import Sidebar from "./Sidebar";
import variables from "@/styles/variables.module.scss";

const Layout = ({ children, title}) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div style={{backgroundColor: variables.grayColor, height: "fit-content", minHeight: "100%"}} className="flex-1 p-7">
        <div className="text-white">
          <h1 className="text-2xl font-semibold" style={{color:variables.primaryColor}}>{title}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};


export default Layout;