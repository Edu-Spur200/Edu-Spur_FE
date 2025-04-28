import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";

const TeacherSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (formData: any) => {
    // Here you would typically send the data to your API
    console.log("Teacher signup form submitted:", formData);

    // After successful API call, navigate to success page with user info
    navigate("/signup-success", {
      state: {
        userType: "teacher",
        name: formData.name,
      },
    });
  };

  return <SignupForm userType="teacher" onSubmit={handleSubmit} />;
};

export default TeacherSignup;
