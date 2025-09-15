import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import { registerParent } from "../../APIs/SchoolSignup";
import { toast } from "react-toastify";

const ParentSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData: any) => {
    try {
      const response = await registerParent(formData);
      console.log(response);
      console.log("Parent signup form submitted:", formData);

      toast.success("Signup successful! Please check your email for verification.", {
        position: "top-right",
        autoClose: 5000,
      });

      // Navigate after a short delay (optional)
      // setTimeout(() => {
      //   navigate("/signup-success", {
      //     state: {
      //       userType: "parent",
      //       name: formData.name,
      //     },
      //   });
      // }, 2000);
    } catch (error: any) {
      console.error("Signup failed:", error);
      toast.error(error?.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return <SignupForm userType="parent" onSubmit={handleSubmit} />;
};

export default ParentSignup;
