import ClientStyles from "../styles/Client.module.css";
import Slider from "react-slick";
import Image from "next/image";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const dataItem = [
    {
      img: "AHS-CLIENT.png",
    },
    {
      img: "client-horizon.png",
    },
    {
      img: "client-pakswiss.png",
    },
    {
      img: "KHYBER-CLIENT.png",
    },
    {
      img: "NCN-CLIENT.png",
    },
  ];
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          // prevArrow: false,
          // nextArrow: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          // prevArrow: false,
          // nextArrow: false,
        },
      },
    ],
  };
  return (
    <>
      <div className={ClientStyles.beAimClients}>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-sm-12 ${ClientStyles.clientHeading}`}>
              <h4>SEE OUR</h4>
              {/* <h2>PRODUCTS</h2> */}
              <div className={ClientStyles.clientHeading}>
                <span>CLIENTS</span>
              </div>
              {/* <div className={ClientStyles.verticleLine}></div> */}
            </div>
          </div>
          <div className={`${ClientStyles.clientCarousel}`}>
            <Slider {...settings}>
              {dataItem.map((item) => (
                <div className={ClientStyles.Item}>
                  <Image
                    className="img-fluid w-100"
                    src={`/images/${item.img}`}
                    alt=""
                    width="1000px"
                    height="140px"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
