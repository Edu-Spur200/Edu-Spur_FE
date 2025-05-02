import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, GraduationCap, ArrowRight } from "lucide-react";

const SignupSuccess = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract user type from state or default to generic
  const userType = location.state?.userType || "user";
  const userName = location.state?.name || "";

  // // Auto-redirect after countdown
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (countdown > 1) {
  //       setCountdown(countdown - 1);
  //     } else {
  //       navigate(`/login/${userType}`);
  //     }
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, [countdown, navigate, userType]);

  // Customize message based on user type
  const getUserTypeMessage = () => {
    switch (userType) {
      case "school":
        return "Your school account has been created successfully. You can now access our platform to find qualified educators and manage your educational needs.";
      case "parent":
        return "Your parent account has been created successfully. You can now access our platform to find tutors and educational resources for your children.";
      case "teacher":
        return "Your teacher account has been created successfully. You can now access our platform to connect with schools and students who need your expertise.";
      default:
        return "Your account has been created successfully. You can now access our platform.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex flex-col">
      <header className="py-6 border-b bg-white">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold">Edu-Spur</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Account Created Successfully!
            </h1>

            {userName && (
              <p className="text-lg text-emerald-600 font-medium mb-4">
                Welcome to Edu-Spur, {userName}!
              </p>
            )}

            <p className="text-gray-600 mb-6">{getUserTypeMessage()}</p>

            <div className="space-y-4">
              <Link
                to={`/login/${userType}`}
                className="block w-full py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md text-center transition-colors"
              >
                Log In Now <ArrowRight className="inline ml-1 h-4 w-4" />
              </Link>

              <p className="text-sm text-gray-500">
                You will be redirected to the login page in {countdown}{" "}
                seconds...
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h2 className="font-medium text-gray-900 mb-3">What's Next?</h2>
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  </div>
                  <span>Complete your profile with additional information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  </div>
                  <span>
                    Explore our platform features designed for {userType}s
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                  </div>
                  <span>Connect with our educational community</span>
                </li>
              </ul>
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

export default SignupSuccess;
