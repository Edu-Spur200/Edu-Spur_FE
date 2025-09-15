import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
import { registerTeacher } from "../../APIs/SchoolSignup";
import { useState } from "react";

const TeacherSignup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log("Submitting teacher data:", formData);
      
      // Directly use axios instead of the broken registerTeacher function
      const response = await fetch('http://localhost:3000/api/teachers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const responseData = await response.json();
      console.log("Teacher registered successfully:", responseData);
      
      // After successful API call, navigate to success page with user info
      navigate("/signup-success", {
        state: {
          userType: "teacher",
          name: formData.name,
          email: formData.email,
          responseData: responseData
        },
      });
    } catch (error: any) {
      console.error("Error in teacher registration:", error);
      
      // Handle different types of errors
      if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
        setError("Cannot connect to server. Please check if the backend is running on port 3000.");
      } else if (error.message?.includes('404')) {
        setError("API endpoint not found. Please check if /api/teachers route exists on the server.");
      } else {
        setError(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <div style={{ 
          color: "red", 
          padding: "10px", 
          marginBottom: "10px",
          border: "1px solid red",
          borderRadius: "4px",
          backgroundColor: "#ffe6e6"
        }}>
          <strong>Error:</strong> {error}
          <br />
          <small>Make sure your backend server is running on http://localhost:3000</small>
        </div>
      )}
      <SignupForm 
        userType="teacher" 
        onSubmit={handleSubmit} 
        // isLoading={isLoading}
      />
    </div>
  );
};

export default TeacherSignup;