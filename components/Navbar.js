import NavStyles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState();
  return (
    <>
      <header className={NavStyles.headerMenu}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <Image
                src="/images/tagline.png"
                alt="logo"
                width="320px"
                height="75px"
                className={NavStyles.logo}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className={`navbar-nav ${NavStyles.fill} ms-auto`}>
                <li
                  className={`nav-item ${
                    router.pathname == "#home" ? "active" : ""
                  }`}
                >
                  <a className="nav-link" href="#home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
