import TeamStyles from "../styles/Team.module.css";
import Image from "next/image";

const Team = () => {
  const team = [
    {
      url: "babar.jpg",
      name: "Babar Khan",
      title: "CEO & Founder",
    },
    {
      url: "siyab.jpg",
      name: "Siyab Khan",
      title: "Senior Developer",
    },
    {
      url: "salman.jpg",
      name: "Salman Khan",
      title: "Graphics Designer",
    },
    {
      url: "usman.jpg",
      name: "Usman Khan",
      title: "Full Stack Developer",
    },
    {
      url: "ubaid.jpg",
      name: "Ubaid Malik",
      title: "Front-end Developer",
    },
    {
      url: "nasir.jpg",
      name: "Nasir Khan",
      title: "Digital Marketer",
    },
  ];
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
                {team.map((item, index) => (
                  <div
                    className={`col-4 col-sm-4 ${TeamStyles.teams}`}
                    key={index}
                  >
                    <Image
                      src={`/images/${item.url}`}
                      className={TeamStyles.Image}
                      width="380px"
                      height="392px"
                    />
                    <div className={TeamStyles.overlay}>
                      <h3>{item.name}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
