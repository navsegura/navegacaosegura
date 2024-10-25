import "./Footer.css";
import { Images } from "../../assets/images.jsx";
import FooterContent from "./FooterContent/FooterContent.jsx";

const Footer = () => {
  return (
    <>
      <footer>
          <FooterContent/>
          <img className="Footer-image" src={Images.Footer} alt="" width={'100%'} />
      </footer>
    </>
  );
};

export default Footer;
