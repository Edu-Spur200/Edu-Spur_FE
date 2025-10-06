import { Link } from "react-router-dom";
import logo from "../assets/WhatsApp Image 2025-07-16 at 4.16.21 AM.jpeg"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 px-6 md:px-12 lg:px-16 flex justify-center bg-white/80 backdrop-blur-md border-b border-red-100">
      <div className="flex h-20 items-center justify-between py-4 w-full max-w-7xl">
        <div className="flex items-center">
          <Link to={'/'}>
          <img src={logo || "/placeholder.svg"} alt="logo" className="h-9 sm:h-10 transition-all" />
          </Link>
        </div>
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#services"
            className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
          >
            Services
          </Link>
          <Link
            to="#benefits"
            className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
          >
            Benefits
          </Link>
          <Link
            to="#educators"
            className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
          >
            Educators
          </Link>
          <Link
            to="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
          >
            Testimonials
          </Link>
        </nav> */}
        <div className="flex items-center gap-4">
          {/* <button className="hidden md:flex h-10 px-4 py-2 text-sm font-medium border rounded-lg border-red-200 bg-white hover:bg-red-50 hover:border-red-300 transition-all">
            Log in
          </button> */}
          {/* <Link to={"selcet-option"}>
            <button className="h-10 px-6 py-2 text-sm font-medium text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all shadow-sm hover:shadow-md">
              Get Started
            </button>
          </Link> */}
        </div>
      </div>
    </header>
  )
}