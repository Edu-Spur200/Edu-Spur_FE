import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LandingPage from "../pages/LandingPage";
import SelectOption from "../pages/SelectOption";
import SchoolSignup from "../pages/auth/SchoolSignup";
import SchoolLogin from "../pages/auth/SchoolLogin";
import ParentSignup from "../pages/auth/ParentSignup";
import ParentLogin from "../pages/auth/ParentLogin";
import TeacherSignup from "../pages/auth/TeacherSignup";
import TeacherLogin from "../pages/auth/TeacherLogin";
import SignupSuccess from "../pages/auth/SignupSuccess";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "selcet-option",
    element: <SelectOption />,
  },
  {
    path: "signup/school",
    element: <SchoolSignup />,
  },
  {
    path: "login/school",
    element: <SchoolLogin />,
  },
  {
    path: "signup/parent",
    element: <ParentSignup />,
  },
  {
    path: "login/parent",
    element: <ParentLogin />,
  },
  {
    path: "signup/teacher",
    element: <TeacherSignup />,
  },
  {
    path: "login/teacher",
    element: <TeacherLogin />,
  },
  {
    path: "/signup-success",
    element: <SignupSuccess />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>, // You can create a separate 404 component
  },
]);
