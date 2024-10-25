import Navbar from "../NavBar/Navbar";
import SideBar from "../SideBar/SideBar";
import { Images } from "../../assets/images";
import { MainContainer, ControlContent, TitleControl, Line, CardContainer, Card, Img, Description } from './ParentalControl.styles'

const ParentalControl = () => {
  return (
    <>
    <Navbar/>
    <SideBar/>
    <MainContainer>
          <ControlContent>
            <TitleControl>Controle Parental</TitleControl>
              <Line></Line>
              <CardContainer>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                </Card>
                <Card><Img src={Images.KidLogger} alt="" />
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                </Card>
              </CardContainer>
          </ControlContent>
        
        </MainContainer>
    </>
  );
};

export default ParentalControl;
