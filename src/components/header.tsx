import { Link } from "react-router-dom"

type HeaderProps = {
  cartCount: number
}

export default function Header({ cartCount }: HeaderProps) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DigiStore
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="font-medium hover:text-blue-600">
            Products
          </Link>

          <Link to="/cart" className="font-medium hover:text-blue-600">
            Cart ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  )
}
