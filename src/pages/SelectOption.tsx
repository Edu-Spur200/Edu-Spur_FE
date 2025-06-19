import React from "react";
import logo from "../assets/IMG-20250502-WA0010-removebg-preview.png";
import { Link } from "react-router-dom";
import { School, Users, UserRound } from "lucide-react";

const SelectOption = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex flex-col">
      <header className="border-b bg-white py-3">
        <div className="container mx-auto px-4 flex items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:cursor-pointer">

              <img src={logo} alt="logo" className="h-[45px]" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1500">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Educational Community
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your role to get started with Edu-Spur and connect with our
              community of educators and learners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-duration="1500">
             <RoleCard
              icon={<UserRound className="h-12 w-12 text-[#133b55]" />}
              title="Teacher" 
              description="Share your expertise, find teaching opportunities, and advance your educational career."
              signupLink="/signup/teacher"
              // loginLink="/login/teacher"
            />
            <RoleCard
              icon={<School className="h-12 w-12 text-[#133b55]" />}
              title="School"
              description="Find qualified educators, enhance your curriculum, and provide cutting-edge education."
              signupLink="/signup/school"
              // loginLink="/login/school"
            />

            <RoleCard
              icon={<Users className="h-12 w-12 text-[#133b55]" />}
              title="Parent"
              description="Connect with tutors, get homeschooling support, help your child build awesome skills."
              signupLink="/signup/parent"
              // loginLink="/login/parent"
            />

           
          </div>
        </div>
      </main>

      <footer className="py-6 border-t bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2024 Edu-Spur. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  signupLink: string;
  // loginLink: string;
}

const RoleCard = ({
  icon,
  title,
  description,
  signupLink,
  // loginLink,
}: RoleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-emerald-50 rounded-full">{icon}</div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mt-auto space-y-3 w-full">
          <Link
            to={signupLink}
            className="block w-full py-2 px-4 bg-[#133b55] hover:bg-[#133b55] text-white font-medium rounded-md text-center transition-colors duration-300 hover:scale-105 hover:shadow-lg"
          >
            Sign Up as a {title}
          </Link>
          {/* <Link
            to={loginLink}
            className="block w-full py-2 px-4 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md text-center transition-colors"
          >
            Log In
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
