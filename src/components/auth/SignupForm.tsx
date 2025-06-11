// import { registerSchool } from "../../APIs/SchoolSignup";
import logo from "../../assets/IMG-20250502-WA0010-removebg-preview.png";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string; // Added phone number field
  password: string;
  confirmPassword: string;
  schoolName: string;
  schoolType: string;
  contactPersonName: string;
  subjectClassCombinations: string;
  childrenCount: string;
  subjects: string;
  qualification: string;
  experience: string;
  location: string;
}

interface SignupFormProps {
  userType: "parent" | "teacher" | "school";
  onSubmit: (data: FormData) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ userType, onSubmit  } ) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "", // Initialize phone number field
    password: "",
    confirmPassword: "",
    // Additional fields based on user type
    schoolName: "",
    schoolType: "",
    contactPersonName: "",
    subjectClassCombinations: "",
    childrenCount: "",
    subjects: "",
    qualification: "",
    experience: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

 
  

  const renderUserTypeSpecificFields = () => {
    switch (userType) {
      case "parent":
        return (
          <>
            <div className="space-y-2">
              <label htmlFor="childrenCount" className="text-sm font-medium">
                Number of Children
              </label>
              <input
                type="number"
                id="childrenCount"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleChange}
                placeholder="Enter number of children"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </>
        );
      case "teacher":
        return (
          <>
            <div className="space-y-2">
              <label htmlFor="subjects" className="text-sm font-medium">
                Subjects You Teach
              </label>
              <input
                type="text"
                id="subjects"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
                placeholder="Enter the subjects you teach"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="qualification" className="text-sm font-medium">
                Qualification
              </label>
              <input
                type="string"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Enter your qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter years of experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <input
                type="string"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </>
        );
      case "school":
        return (
          <>
            <div className="space-y-2">
              <label htmlFor="schoolName" className="text-sm font-medium">
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="schoolType" className="text-sm font-medium">
                School Type
              </label>
              <select
                id="schoolType"
                name="schoolType"
                value={formData.schoolType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select school type</option>
                <option value="primary">Primary School</option>
                <option value="secondary">Secondary School</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="contactPersonName" className="text-sm font-medium">
                Your Position
              </label>
              <input
                type="text"
                id="contactPersonName"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
                placeholder="Enter your position"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subjectClassCombinations"
                className="text-sm font-medium"
              >
                Subject & Class Combinations per Teacher
              </label>
              <textarea
                id="subjectClassCombinations"
                name="subjectClassCombinations"
                value={formData.subjectClassCombinations}
                onChange={handleChange}
                placeholder="Please specify how you intend to combine subjects for each teacher and the classes they'll handle. For example:

Teacher 1: English + Literature – SSS1 to SSS3
Tech instructor - HTML / CSS - SSS 1 to SSS3."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 min-h-[120px]"
              />
              <p className="text-xs text-gray-500">
                This helps us understand your staffing needs better.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const userTypeTitle = {
    school: "School",
    parent: "Parent",
    teacher: "Teacher",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex flex-col">
      <header className="border-b bg-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 py-2">
            <img src={logo} alt="logo" className="h-[50px] xs:h-[35px]" />
          </div>
          <a
            href="/"
            className="h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-[#092030]"
          >
            Home
          </a>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Sign Up as a {userTypeTitle[userType]}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              {/* Phone Number Field - Added for all user types */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
                <p className="text-xs text-gray-500">
                  Include country code if applicable (e.g., +234)
                </p>
              </div>

              {renderUserTypeSpecificFields()}

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                  minLength={8}
                />
                <p className="text-xs text-gray-500">
                  Password must be at least 8 characters long
                </p>
              </div>

          

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-[#133b55] hover:bg-[#133b55] text-white font-medium rounded-md transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href={`/login/${userType}`}
                  className="text-[#133b55] hover:text-[#092030] font-medium"
                >
                  Log In
                </a>
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

export default SignupForm;
