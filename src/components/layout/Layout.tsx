import { Outlet } from "react-router-dom";
import Footer from "../../static/Footer";
import Header from "../../static/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
