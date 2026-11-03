import { Link, useParams } from "react-router-dom"

import { products } from "../data/product"

type ProductDetailProps = {
  addToCart: (product: (typeof products)[0]) => void
}

export default function ProductDetail({ addToCart }: ProductDetailProps) {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">Product tidak ditemukan</h1>

        <Link to="/products" className="mt-5 inline-block text-blue-600">
          ← Kembali ke Products
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Link to="/products" className="mb-8 inline-block text-blue-600">
        ← Kembali ke Products
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-100 w-full rounded-2xl object-cover"
        />

        <div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
            {product.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-2xl font-bold text-blue-600">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <p className="mt-6 leading-7 text-gray-600">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            + Add to Cart
          </button>
        </div>
      </div>
    </main>
  )
}
