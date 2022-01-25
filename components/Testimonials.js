import TestiStyles from "../styles/Testimonials.module.css";
import Slider from "react-slick";
import Image from "next/image";

const Testimonials = () => {
  const dataItem = [
    {
      img: "profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa id esse, neque impedit earum quaerat illum sapiente quae. Voluptates cupiditate, at culpa placeat earum ullam. Accusamus sit totam quis aliquam voluptates. Repellat laudantium architecto et alias dicta,",
      auther: "Jhon Doe",
      position: "Web developer",
    },
    {
      img: "profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa id esse, neque impedit earum quaerat illum sapiente quae. Voluptates cupiditate, at culpa placeat earum ullam. Accusamus sit totam quis aliquam voluptates. Repellat laudantium architecto et alias dicta,",
      auther: "Dev Ed",
      position: "Graphics Designer",
    },
    {
      img: "profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa id esse, neque impedit earum quaerat illum sapiente quae. Voluptates cupiditate, at culpa placeat earum ullam. Accusamus sit totam quis aliquam voluptates. Repellat laudantium architecto et alias dicta,",
      auther: "Traversry ",
      position: "JavaScript Developer",
    },
    {
      img: "profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa id esse, neque impedit earum quaerat illum sapiente quae. Voluptates cupiditate, at culpa placeat earum ullam. Accusamus sit totam quis aliquam voluptates. Repellat laudantium architecto et alias dicta,",
      auther: "Jhon Doe",
      position: "Web developer",
    },
    {
      img: "profile.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa id esse, neque impedit earum quaerat illum sapiente quae. Voluptates cupiditate, at culpa placeat earum ullam. Accusamus sit totam quis aliquam voluptates. Repellat laudantium architecto et alias dicta,",
      auther: "Jhon Doe",
      position: "Web developer",
    },
  ];
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 1,
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
      <div className={TestiStyles.beAimTestimonials}>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-sm-12 ${TestiStyles.testiHeading}`}>
              <span>TESTIMONIALS</span>
              <p>What Clients Say About Us</p>
            </div>
          </div>
          <div className={`${TestiStyles.testiCarousel}`}>
            <Slider {...settings}>
              {dataItem.map((item) => (
                <div className={`col-sm-3 ${TestiStyles.Item}`}>
                  <Image
                    className="img-fluid w-100"
                    src={`/images/${item.img}`}
                    alt=""
                    width="80px"
                    height="80px"
                  />
                  <p>{item.text}</p>
                  <h3>{item.auther}</h3>
                  <h4>{item.position}</h4>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
