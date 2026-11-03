import { Link } from "react-router-dom"
import type { Product } from "../data/product"

type ProductCardProps = {
  product: Product
  addToCart: (product: Product) => void
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
          {product.category}
        </span>

        <h2 className="mt-3 text-lg font-bold">{product.name}</h2>

        <p className="mt-1 font-bold text-blue-600">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-4 flex gap-2">
          <Link to={`/products/${product.id}`} className="flex-1">
            <button className="w-full rounded-lg border border-blue-600 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
              Detail
            </button>
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  )
}
