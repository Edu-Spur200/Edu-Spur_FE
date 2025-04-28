import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";

const ParentSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    // Here you would typically send the data to your API
    console.log("Parent signup form submitted:", formData);

    // After successful API call, navigate to success page with user info
    navigate("/signup-success", {
      state: {
        userType: "parent",
        name: formData.name,
      },
    });
  };

  return <SignupForm userType="parent" onSubmit={handleSubmit} />;
};

export default ParentSignup;
