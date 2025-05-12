import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import { registerTeacher } from "../../APIs/SchoolSignup";

const TeacherSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData: any) => {
    const response = await registerTeacher(formData);
    console.log("Teacher registered:", response);
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
