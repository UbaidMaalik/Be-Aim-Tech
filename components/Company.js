import CompanyStyles from "../styles/Company.module.css";
import Image from "next/image";

const Company = () => {
  return (
    <>
      <div className={CompanyStyles.beAimCompany}>
        <div className="container">
          <div className="row">
            {/* <div className={`col-12 col-sm-6 ${CompanyStyles.leftHand}`}>
              <Image src="/images/company3.png" width="550px" height="450px" />
            </div> */}
            <div className={`col-12 col-sm-12 ${CompanyStyles.rightHand}`}>
              <h2>Fastest Growing IT Company</h2>
              <p>
                We have highly experienced web developers who have successfully
                launched various huge projects and proved their skills in many
                projects. We are responsible for the working, and we try to keep
                the best relationship with our customers. We have designed
                hundreds of Websites, Mobile Apps, Logos and Icons for our
                clients with a unique research-based process. Be Aim Tech is
                spreading the best services in the industry of IT.
              </p>
              {/* <div className={CompanyStyles.companyButton}>
                <button className={CompanyStyles.btn1}>Our Portfolio</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
