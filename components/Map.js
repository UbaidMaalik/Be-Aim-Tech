import MapStyles from "../styles/Map.module.css";

const Map = () => {
  return (
    <>
      <div className={MapStyles.map}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-sm-6 ${MapStyles.title}`} id="col2">
              <div className="container">
                <h2>Get In Touch With Us</h2>
                <form
                  className={`mt-4 ${MapStyles.form}`}
                  action="#"
                  id="myForm"
                >
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className={MapStyles.formControl}
                        placeholder="Your Name"
                        name="username"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className={MapStyles.formControl}
                        placeholder="Your Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className={MapStyles.formControl}
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        className={MapStyles.formControl}
                        placeholder="Phone number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <textarea
                        name="message"
                        id=""
                        cols="79"
                        className={`mt-3 ${MapStyles.formControl}`}
                        placeholder="Message"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        type="submit"
                        value="SEND MESSAGE"
                        className={`btn btn-success mt-4 ${MapStyles.button}`}
                        id="btn"
                        name="send"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 p-0" id="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3618.204561227514!2d67.00479888916016!3d24.925100326538086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ffca15285b9%3A0x9f45da333b053180!2sXplode%20Rd%2C%20Azad%20Nagar%20Frontier%20Colony%201%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1643617521154!5m2!1sen!2s"
                width="100%"
                height="603"
                style={{ border: "0" }}
                // allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
