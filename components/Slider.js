import SliderStyles from "../styles/Slider.module.css";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div className={SliderStyles.slider} id="home">
        <div className="container">
          <div className={`row ${SliderStyles.reverse}`}>
            <div className={`col-12 col-sm-6 ${SliderStyles.LeftArea}`}>
              <h2>
                We <span className={SliderStyles.tech}>create</span> ultimate
                user <span className={SliderStyles.tech}>experience</span> for
                businesses <span className={SliderStyles.tech}>globally</span>
              </h2>
              <div className={SliderStyles.sliderButton}>
                <button className={SliderStyles.btn1}>Contact Us</button>
              </div>
            </div>
            <div className={`col-12 col-sm-6 ${SliderStyles.RightArea}`}>
              <Image
                src="/images/illustration.png"
                className={SliderStyles.rightImage}
                width="500px"
                height="450px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
