import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../assets/edu.png";

type UserType = "school" | "parent" | "teacher";

interface LoginFormProps {
  userType: UserType;
}

const LoginForm: React.FC<LoginFormProps> = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would typically call an API
    console.log("Login submitted:", formData);
    // Redirect to dashboard
    navigate("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const userTypeTitle = {
    school: "School",
    parent: "Parent",
    teacher: "Teacher",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-[100px]" />
          </Link>
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Back to Selection
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-[30px] py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Log In as a {userTypeTitle[userType]}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-xs text-emerald-600 hover:text-emerald-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#133b55]hover:bg-[#133b55]text-white font-medium rounded-md transition-colors"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={`/signup/${userType}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
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

export default LoginForm;
