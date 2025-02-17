"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false);
  const handlerNavShow = () => {
    setShowNav(true);
  }
  const handlerNavHide = () => {
    setShowNav(false);
  }


  return (
    <div>
        <Nav openNav={handlerNavShow} />
        <MobileNav showNav={showNav} closeNav={handlerNavHide} />
    </div>
  )
}

export default ResponsiveNav