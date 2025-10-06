import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";

const SchoolSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    // Here you would typically send the data to your API
    console.log("School signup form submitted:", formData);

    // After successful API call, navigate to success page with user info
    navigate("/signup-success", {
      state: {
        userType: "school",
        name: formData.name,
      },
    });
  };

  return <SignupForm userType="school" onSubmit={handleSubmit} />;
};

export default SchoolSignup;
