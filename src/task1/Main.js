import React from 'react'
import { CartProvider } from 'react-use-cart'
import NavBar from './component/NavBar'
import Cart from './component/Cart'


function Main() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Cart />
      </CartProvider>
    </>
  )
}

export default Main