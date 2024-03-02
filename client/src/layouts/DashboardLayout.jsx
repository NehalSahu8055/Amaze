import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";

function DashboardLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen  max-w-[65rem]  py-8 pt-[6.5rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
