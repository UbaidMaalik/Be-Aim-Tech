import NavStyles from "../styles/Nav.module.css";
import Image from "next/image";
import { useState } from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
    },
    {
      name: "Products",
      url: "/",
    },
    {
      name: "Testimonials",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
  ];

  return (
    <>
      <div className={NavStyles.Menu}>
        <div className="container">
          <div className={NavStyles.Navbar}>
            <span className={NavStyles.navLogo}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width="350px"
                height="80px"
              />
            </span>
            <div className={`${NavStyles.navItems} ${NavStyles.desktopNav}`}>
              {links.map((item, index) => (
                <a href={item.url} key={index}>
                  {item.name}
                </a>
              ))}
            </div>
            <div
              className={`${NavStyles.navItems} ${NavStyles.mobNav} ${
                isOpen && NavStyles.mobNavOpacity
              }`}
            >
              {links.map((item, index) => (
                <a href={item.url} key={index}>
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setisOpen(!isOpen)}
              className={NavStyles.hamburger}
            >
              {isOpen ? (
                <CloseOutlinedIcon style={{ color: "#fff" }} />
              ) : (
                <MenuOutlinedIcon />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
