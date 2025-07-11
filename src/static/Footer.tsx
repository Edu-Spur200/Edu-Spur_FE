import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background pl-[80px] xxs:pl-[30px]">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-4 lg:w-1/3" data-aos="fade-up" data-aos-duration="1500">
          <div className="flex items-center gap-2">
            {/* <GraduationCap className="h-6 w-6 text-[#133b55]" /> */}
            <img src="../../public/IMG-20250502-WA0010.jpg" alt="" className="w-[45px] h-[40px]" data-aos="zoom-in" data-aos-delay="600"/>
            <span className="text-xl font-bold">Edu-Spur</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering schools, parents, and students by connecting them with
            exceptional educators for regular subjects and tech courses.
          </p>
          <div className="flex gap-4">
            <Link
              to="https://www.facebook.com/profile.php?id=61561025581361"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to="https://www.instagram.com/edu_spur?igsh=MWNtMjlyMjE5d2k3dQ=="
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/edu-spur-outsourcing-solutions/"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
    0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
    19h-3v-10h3v10zm-1.5-11.27c-.97 
    0-1.75-.79-1.75-1.75s.78-1.75 
    1.75-1.75 1.75.78 1.75 1.75-.78 
    1.75-1.75 1.75zm13.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
    0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 
    1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 
    4.59v5.61z"/>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>

          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  For Schools
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  For Parents
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  For Students
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Tech Education
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3" data-aos="fade-down" data-aos-duration="1500">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-xs text-muted-foreground" >
            © 2024 Edu-Spur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
