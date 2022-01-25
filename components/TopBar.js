import TopbarStyles from "../styles/Topbar.module.css";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
// import FacebookOutlinedIcon from "@material-ui/icons/FacebookOutlined";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

const TopBar = () => {
  return (
    <>
      <div className={TopbarStyles.topbar}>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-sm-6 ${TopbarStyles.topBarPhone}`}>
              <PhoneIphoneIcon className={TopbarStyles.icons} />
              +92-344-2684447
              <EmailIcon className={TopbarStyles.icons} /> info@beaimtech.com
            </div>
            <div className={`col-12 col-sm-6 ${TopbarStyles.topBarSocial}`}>
              <InstagramIcon className={TopbarStyles.icons} />
              <WhatsAppIcon className={TopbarStyles.icons} />
              <TwitterIcon className={TopbarStyles.icons} />
              <FacebookIcon className={TopbarStyles.icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
