import Navbar from "../../components/NavBar/Navbar";
// import SideBar from "../../components/SideBar/SideBar";
import { Images } from "../../assets/images";
import { Link } from "react-router-dom";
import { MainContainer, Back, Span, ControlContent, TitleControl, Line, CardContainer, Card, Img, Description } from './ParentalControl.styles'
import NuvensContainer from "../../components/Nuvens/Nuvens";

const ParentalControl = () => {
  return (
    <>
    <Navbar/>
    {/* <SideBar/> */}
    <MainContainer>
      <NuvensContainer/>
          <ControlContent>
            <Span>
              <Link to="/user-profile">
                <Back><i className='bx bxs-chevrons-left'></i></Back>
              </Link>
              <TitleControl>Controle Parental</TitleControl>
              <p></p>
            </Span>
              <Line></Line>
              <CardContainer>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                <button>Assistir</button>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                <button>Assistir</button>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                <button>Assistir</button>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                <button>Assistir</button>
                </Card>
              </CardContainer>
          </ControlContent>
        
        </MainContainer>
    </>
  );
};

export default ParentalControl;
