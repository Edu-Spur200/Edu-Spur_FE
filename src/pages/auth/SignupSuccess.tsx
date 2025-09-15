import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";
import axios from "axios";
import img from "../../assets/WhatsApp Image 2025-07-16 at 4.16.21 AM.jpeg";

const SignupSuccess = () => {
  const [countdown, setCountdown] = useState(5);
  const [status, setStatus] = useState<"idle" | "verifying" | "success" | "error">("idle");
  const [message, setMessage] = useState("Waiting for verification...");
  const location = useLocation();
  const navigate = useNavigate();

  const userType = location.state?.userType || "user";
  const userName = location.state?.name || "";

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    // If no token, stay in idle state (don't show error yet)
    if (!token) {
      setStatus("idle");
      setMessage("Waiting for email verification...");
      return;
    }

    // Only start verification if we have a token
    setStatus("verifying");
    setMessage("Verifying your email...");

    let didRequest = false;

    // Try all verification endpoints
    const tryAllEndpoints = async () => {
      const endpoints = [
        `/api/parents/verify?token=${token}`,
        `/api/teachers/verify?token=${token}`,
        `/api/schools/verify?token=${token}`
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await axios.get(`http://localhost:3000${endpoint}`);
          
          if (!didRequest && response.status === 200) {
            setStatus("success");
            setMessage("Email verified successfully!");
            return;
          }
        } catch (error: any) {
          if (!didRequest && error.response?.status === 409) {
            setStatus("success");
            setMessage("Email already verified!");
            return;
          }
          // Continue to next endpoint if this one fails
          continue;
        }
      }

      // If all endpoints failed
      if (!didRequest) {
        setStatus("error");
        setMessage("Invalid or expired verification link. Please try signing up again.");
      }
    };

    tryAllEndpoints();

    return () => {
      didRequest = true;
    };
  }, [location.search]);

  useEffect(() => {
    if (status !== "success") return;

    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown((prev) => prev - 1);
      } else {
        navigate(`/login/${userType}`);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, status, navigate, userType]);

  const getUserTypeMessage = () => {
    switch (userType) {
      case "teacher":
        return "Thank you for joining Edu-Spur as an educator! You can now access your teacher dashboard.";
      case "school":
        return "Welcome to Edu-Spur! Your school registration is now complete.";
      case "parent":
        return "We're working on more exciting features for parents. Thank you for joining us!";
      default:
        return "Thank you for verifying your email! Your account is now active.";
    }
  };

  const getDisplayContent = () => {
    switch (status) {
      case "idle":
        return (
          <>
            <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <div className="h-12 w-12 text-gray-400">
                <CheckCircle className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{message}</h1>
            <p className="text-gray-600 mb-6">
              Please check your email and click the verification link we sent you.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">Haven't received the email?</p>
              <button
                onClick={() => navigate(`/signup/${userType}`)}
                className="px-4 py-2 bg-[#133b55] text-white rounded-md hover:bg-[#0f2a3f] transition-colors text-sm"
              >
                Resend Verification Email
              </button>
            </div>
          </>
        );

      case "verifying":
        return (
          <>
            <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <div className="h-12 w-12 border-4 border-[#133b55] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{message}</h1>
          </>
        );

      case "success":
        return (
          <>
            <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <CheckCircle className="h-12 w-12 text-[#133b55]" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{message}</h1>
            {userName && (
              <p className="text-lg text-[#133b55] font-medium mb-4">
                Welcome to Edu-Spur, {userName}!
              </p>
            )}
            <p className="text-gray-600 mb-6">{getUserTypeMessage()}</p>
            <p className="text-sm text-gray-500">
              Redirecting to login in {countdown} second{countdown !== 1 ? "s" : ""}...
            </p>
          </>
        );

      case "error":
        return (
          <>
            <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
              <XCircle className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{message}</h1>
            <div className="mt-4 space-y-3">
              <button
                onClick={() => navigate(`/signup/${userType}`)}
                className="px-4 py-2 bg-[#133b55] text-white rounded-md hover:bg-[#0f2a3f] transition-colors"
              >
                Try Signing Up Again
              </button>
              <p className="text-sm text-gray-500">
                If the problem persists, please contact support.
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex flex-col">
      <header className="py-6 border-b bg-white">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={img} alt="Edu-Spur" className="h-[28px]" />
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="p-8 text-center">
            {getDisplayContent()}
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