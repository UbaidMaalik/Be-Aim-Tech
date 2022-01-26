import TeamStyles from "../styles/Team.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className={TeamStyles.Team}>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-sm-6 ${TeamStyles.teamBio}`}>
              <h2>Meet</h2>
              <h3>Our Team</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                ipsam neque repudiandae eius unde nemo. Esse excepturi dolores
                officiis magnam architecto cumque dolor exercitationem molestiae
                iusto animi soluta quisquam fuga obcaecati facere sed,
                temporibus adipisci officia ab consectetur blanditiis amet eos
                quidem non voluptas. Commodi porro optio quidem consectetur
                similique?
              </p>
            </div>
            <div className={`col-12 col-sm-6 ${TeamStyles.teamPics}`}>
              <div className="row">
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}>
                  <Image
                    src="/images/babar.jpg"
                    className={TeamStyles.Image}
                    width="380px"
                    height="392px"
                  />
                  <div className={TeamStyles.overlay}>
                    <h3>Babar Khan</h3>
                    <p>CEO & Founder</p>
                    {/* <button className={TeamStyles.btn1}>View Product</button> */}
                  </div>
                </div>
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}>
                  <Image
                    src="/images/siyab.jpg"
                    className={TeamStyles.Image}
                    width="380px"
                    height="392px"
                  />
                  <div className={TeamStyles.overlay}>
                    <h3>Siyab Khan</h3>
                    <p>Senior Developer</p>
                    {/* <button className={TeamStyles.btn1}>View Product</button> */}
                  </div>
                </div>
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}>
                  <Image
                    src="/images/salman.jpg"
                    className={TeamStyles.Image}
                    width="380px"
                    height="392px"
                  />
                  <div className={TeamStyles.overlay}>
                    <h3>Salman Khan</h3>
                    <p>Graphics Designer</p>
                    {/* <button className={TeamStyles.btn1}>View Product</button> */}
                  </div>
                </div>
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}>
                  <Image
                    src="/images/usman.jpg"
                    className={TeamStyles.Image}
                    width="380px"
                    height="392px"
                  />
                  <div className={TeamStyles.overlay}>
                    <h3>Usman Khan</h3>
                    <p>Full Stack Developer</p>
                    {/* <button className={TeamStyles.btn1}>View Product</button> */}
                  </div>
                </div>
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}>
                  <Image
                    src="/images/ubaid.jpg"
                    className={TeamStyles.Image}
                    width="380px"
                    height="392px"
                  />
                  <div className={TeamStyles.overlay}>
                    <h3>Ubaid Maalik</h3>
                    <p>Front-end Developer</p>
                    {/* <button className={TeamStyles.btn1}>View Product</button> */}
                  </div>
                </div>
                <div className={`col-4 col-sm-4 ${TeamStyles.teams}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
