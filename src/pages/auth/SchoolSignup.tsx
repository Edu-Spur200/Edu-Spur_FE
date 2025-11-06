import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import { registerSchool } from "../../APIs/SchoolSignup";

const SchoolSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    registerSchool(formData)
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
