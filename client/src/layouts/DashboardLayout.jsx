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

      <main className="  mx-auto min-h-screen max-w-[65rem]  py-8  pb-[3rem] pl-[4.5rem] pt-[6.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
