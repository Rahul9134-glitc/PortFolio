import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

import React from 'react'

export default function Layout() {
  return (
    <>
     <Header/>
     <Outlet />
    </>
   
  )
}
