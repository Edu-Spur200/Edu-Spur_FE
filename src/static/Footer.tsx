import { Link } from "react-router-dom"
import img from "../assets/WhatsApp Image 2025-07-16 at 4.16.21 AM.jpeg"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-red-50 via-orange-50 to-red-50 px-14 md:px-8 lg:px-20">
      <div className="container flex flex-col gap-8 py-12 md:py-16 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <div className="flex items-center gap-2">
            <Link to={'/'}>
            <img
              src={img || "/placeholder.svg"}
              alt="Edu-Spur Logo"
              className="h-8 md:h-10"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            </Link>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Empowering schools, parents, and students by connecting them with exceptional educators for regular subjects
            and tech courses.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              to="https://www.facebook.com/profile.php?id=61561025581361"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              to="https://x.com/Edu_Spur?t=au8vX0LpDbhSAC5rSvtRrA&s=09"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M17.53 3H21.5l-7.16 8.19L23 21h-6.19l-4.87-5.98L4.47 21H0.5l7.64-8.75L1 3h6.28l4.37 5.37L17.53 3zm-1.09 16h2.13l-6.02-7.39-1.71 1.96L16.44 19zm-10.97 0h2.13l2.98-3.41-1.71-1.96L5.47 19zm2.98-14H6.32l5.13 6.29 1.71-1.96L8.45 5zm7.1 0h-2.13l-2.98 3.41 1.71 1.96L15.55 5z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">X</span>
            </Link>
            <Link
              to="https://www.instagram.com/edu_spur?igsh=MWNtMjlyMjE5d2k3dQ=="
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/edu-spur-outsourcing-solutions/"
              className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
    0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
    19h-3v-10h3v10zm-1.5-11.27c-.97 
    0-1.75-.79-1.75-1.75s.78-1.75 
    1.75-1.75 1.75.78 1.75 1.75-.78 
    1.75-1.75 1.75zm13.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
    0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 
    1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 
    4.59v5.61z"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  For Schools
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  For Parents
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Tech Education
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Press
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-red-200 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-xs text-gray-600">© 2024 Edu-Spur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
