import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "./Navbar2";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {/* <Navbar /> */}
      <Navbar2 />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
