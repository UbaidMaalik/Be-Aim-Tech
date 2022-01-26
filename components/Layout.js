import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
