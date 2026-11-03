import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"

import Home from "./pages/Home"
import Products from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/cart"

import type { Product } from "./data/product"

export default function App() {
  const [cart, setCart] = useState<Product[]>([])

  function addToCart(product: Product) {
    setCart([...cart, product])

    alert(`${product.name} ditambahkan ke cart!`)
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((product) => product.id !== id))
  }

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route path="/products" element={<Products addToCart={addToCart} />} />

        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
