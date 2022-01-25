import FooterStyles from "../styles/Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className={`text-center text-lg-start text-muted ${FooterStyles.footer}`}
      >
        <div className="container">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div className={`me-5 d-none d-lg-block ${FooterStyles.social}`}>
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#">
                <InstagramIcon className={FooterStyles.icons} />
              </a>
              <a href="#">
                <WhatsAppIcon className={FooterStyles.icons} />
              </a>
              <a href="#">
                <TwitterIcon className={FooterStyles.icons} />
              </a>
              <a href="#">
                <FacebookIcon className={FooterStyles.icons} />
              </a>
            </div>
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div
                  className={`col-sm-3 col-lg-4 col-xl-3 mx-auto mb-4 ${FooterStyles.footerContent}`}
                >
                  <Image
                    src="/images/footer-logo.png"
                    alt="logo"
                    width="250px"
                    height="75px"
                    className={FooterStyles.logo}
                  />
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum doloribus, ullam labore natus illum architecto tempora
                    porro quae sed laudantium vero rerum.
                  </p>
                </div>
                <div
                  className={`col-sm-2 col-lg-2 col-xl-2 mx-auto mb-4 ${FooterStyles.footerContent}`}
                >
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                <div
                  className={`col-sm-3 col-lg-2 col-xl-2 mx-auto mb-4 ${FooterStyles.footerContent}`}
                >
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Products
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Team
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Contact
                    </a>
                  </p>
                </div>
                <div
                  className={`col-sm-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ${FooterStyles.footerContent}`}
                >
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MyLocationOutlinedIcon /> New York, NY 10012, US
                  </p>
                  <p>
                    <EmailIcon /> info@beaimtech.com
                  </p>
                  <p>
                    <PhoneIphoneIcon /> +92-344-2684447
                  </p>
                  <p>
                    <PhoneIphoneIcon /> +92-344-2684447
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
        </div>
        {/* <!-- Copyright --> */}
        <div
          className={`text-center p-4 ${FooterStyles.bottomBar}`}
          style={{ backgroundColor: "#cfb022" }}
        >
          © 2021 Copyright:{" "}
          <a className="text-reset fw-bold" href="#">
            BeAimTech.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
