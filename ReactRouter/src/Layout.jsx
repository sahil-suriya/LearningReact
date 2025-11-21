import React from 'react'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
