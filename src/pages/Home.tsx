import { Link } from "react-router-dom"
import { products } from "../data/product"
import ProductCard from "../components/Productcard"

type HomeProps = {
  addToCart: (product: (typeof products)[0]) => void
}

export default function Home({ addToCart }: HomeProps) {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-blue-50 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 font-semibold text-blue-600">
              WELCOME TO DIGISTORE
            </p>

            <h1 className="text-4xl leading-tight font-bold md:text-5xl">
              Upgrade Your
              <span className="block text-blue-600">Lifestyle</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Temukan berbagai produk berkualitas dengan harga terbaik.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Shop Now →
            </Link>
          </div>

          <img
            src={products[0].image}
            alt="Wireless Headphone"
            className="h-80 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Produk */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Featured Products</h2>

            <p className="text-gray-500">Produk pilihan untuk kamu</p>
          </div>

          <Link to="/products" className="font-medium text-blue-600">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
