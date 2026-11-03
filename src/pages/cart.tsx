import { Link } from "react-router-dom"

import type { Product } from "../data/product"

type CartProps = {
  cart: Product[]
  removeFromCart: (id: number) => void
}

export default function Cart({ cart, removeFromCart }: CartProps) {
  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-bold">Your Cart</h1>

      <p className="mt-2 text-gray-500">Produk yang kamu pilih.</p>

      {cart.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold">Cart masih kosong</h2>

          <p className="mt-2 text-gray-500">
            Yuk pilih produk terlebih dahulu.
          </p>

          <Link
            to="/products"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Belanja Sekarang
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-xl border bg-white p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-bold">{product.name}</h2>

                  <p className="text-blue-600">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-xl border bg-white p-6">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="my-5 flex justify-between">
              <span>Total</span>

              <span className="font-bold text-blue-600">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              onClick={() => alert("Checkout berhasil!")}
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
