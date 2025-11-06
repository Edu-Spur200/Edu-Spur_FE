import logo from "../assets/WhatsApp Image 2025-07-16 at 4.16.21 AM.jpeg";

export default function Header() {
  return (
    <header className="sticky top-0 z-40  px-[60px] xxs:px-0 xxs:w-[100%] overflow-x-hidden flex justify-center bg-gray-50">
      <div className=" flex h-[80px] items-center justify-between py-4 w-[90%] xxs:w-[88%] ">
        <div className="flex items-center mr-[20px]">
            <img src={logo} alt="logo" className="h-[35px] xxs:h-[25px] mt-[5px]" />
    
        </div>
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link
            to="#services"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Services
          </Link>
          <Link
            to="#benefits"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Benefits
          </Link>
          <Link
            to="#educators"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Educators
          </Link>
          <Link
            to="#testimonials"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Testimonials
          </Link>
        </nav> */}
        <div className="flex items-center gap-4">
          {/* <button className="hidden md:flex h-10 px-4 py-2 text-sm font-medium border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
            Log in
          </button> */}
          {/* <Link to={"selcet-option"}>
            <button className="h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-[#092030]">
              Get Started
            </button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
