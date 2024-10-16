import "./Footer.css";
import { Images } from "../../assets/images.jsx";
import OceanDecorations from "./OceanDecorations/OceanDecorations.jsx";
import FooterContent from "./FooterContent/FooterContent.jsx";

const Footer = () => {
  return (
    <>
      <footer>
          <OceanDecorations/>
          <FooterContent/>
          <img className="Footer-image" src={Images.Footer} alt="" width={'100%'} />
      </footer>
    </>
  );
};

export default Footer;
