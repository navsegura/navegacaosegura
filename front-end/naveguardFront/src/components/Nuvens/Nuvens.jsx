import { Images } from '../../assets/images'
import { Nuvens, ImgNuvens } from './Nuvens.styles'

const NuvensContainer = () => {
  return (
    <>
        <Nuvens>
            <ImgNuvens src={Images.Nuvem} style={{ top: '40%', left: '-1%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ top: '2%', right: '40%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ top: '50%', right: '5%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ bottom: '5%', right: '40%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ top: '70%', right: '-40%' }} alt="" />
            <ImgNuvens src={Images.Nuvem} style={{ top: '5%', right: '-50%' }} alt="" />
            <ImgNuvens src={Images.Nuvem} style={{ bottom: '-5%', right: '-100%' }} alt="" />
            <ImgNuvens src={Images.Nuvem} style={{ top: '30%', right: '-150%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ top: '0%', right: '-200%' }} alt="" /> {/* OK */}
            <ImgNuvens src={Images.Nuvem} style={{ top: '90%', right: '-200%' }} alt="" /> {/* OK */}
      </Nuvens>
    </>
  );
};

export default NuvensContainer;
