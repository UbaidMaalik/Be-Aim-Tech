import NavStyles from "../styles/Nav.module.css";
import Image from "next/image";
import { useState } from "react";

const Navbar2 = () => {
  const [isOpen, setisOpen] = ({} = useState(false));

  return (
    <>
      <div className={NavStyles.Menu}>
        <div className="container">
          <div className={NavStyles.Navbar}>
            <span className={NavStyles.navLogo}>
              <Image
                src="/images/tagline.png"
                alt="logo"
                width="350px"
                height="80px"
              />
            </span>
            <div className={`${NavStyles.navItems} ${isOpen && "open"}`}>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/service">Service</a>
              <a href="/contact">Contact</a>
            </div>
            <div
              className={`${NavStyles.navToggle} ${isOpen && "open"}`}
              onClick={() => setisOpen(!isOpen)}
            >
              <div className={NavStyles.bar}></div>
            </div>
          </div>
          {/* <nav>
            <div className={NavStyles.logo}>
              <Image
                src="/images/tagline.png"
                alt="logo"
                width="350px"
                height="80px"
              />
            </div>
            <ul className={`${NavStyles.navLinks}`}>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SERVICE</a>
              </li>
              <li>
                <a href="#">PRODUCTS</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
            <div
              className={NavStyles.burger}
              onClick={() => setisOpen(!isOpen)}
            >
              <div className={NavStyles.Line1}></div>
              <div className={NavStyles.Line2}></div>
              <div className={NavStyles.Line3}></div>
            </div>
          </nav> */}
        </div>
      </div>
    </>
  );
};

export default Navbar2;
