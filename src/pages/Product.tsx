import { useState } from "react"

import { products } from "../data/product"
import ProductCard from "../components/Productcard"

type ProductsProps = {
  addToCart: (product: (typeof products)[0]) => void
}

export default function Products({ addToCart }: ProductsProps) {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Our Products</h1>

        <p className="mt-2 text-gray-500">Cari produk yang kamu inginkan.</p>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-600"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          Produk tidak ditemukan.
        </p>
      )}
    </main>
  )
}
