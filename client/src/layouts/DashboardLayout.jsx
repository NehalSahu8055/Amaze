import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./../components/Sidebar";

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <main className="w-full overflow-hidden  py-8  pb-[3rem] pl-[6rem] pr-[1rem]  pt-[4.2rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
