import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Alert from "../../Components/Alert/Alert";

export default function () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Alert />
    </>
  );
}
