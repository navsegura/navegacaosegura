import NavBar from "../../components/Navbar/Navbar"
// import SideBar from "../../components/SideBar/SideBar";
import { Images, Videos } from "../../assets/images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainContainer, Back, Span, ControlContent, TitleControl, Line, CardContainer, Card, MolduraImgFamily, MolduraImg, Img, Description, Overlay, NuvemOverlay, NuvemOverlayII, NuvemOverlayIII, NuvemOverlayIV } from './ParentalControl.styles'
import ResolutionNotAvailable from '../../components/ResolutionNotAvailable/ResolutionNotAvailable'
import NuvensContainer from "../../components/Nuvens/Nuvens";


const ParentalControl = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  // const [closeVideo, setCloseVideo] = useState(false);

  const handleVideoClick = (url) => {
    setVideoUrl(url)
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoUrl("");
  };

  const videos = {
    familyLink: Videos.FamilyLinkVideo,
    kidLogger: Videos.KidLoggerVideo,
    qustodio: Videos.QustodioVideo,
    FamilyShield: Videos.FamilyShieldVideo,
  };

  return (
    <>
    <ResolutionNotAvailable/>
    <NavBar/>
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
                <Card>
                  <MolduraImgFamily>
                    <Img src={Images.FamilyLink} alt="" />
                    </MolduraImgFamily>
                <Description>O Google Family Link permite que os pais configurem e gerenciem a conta Google dos filhos.</Description>
                <button onClick={() => handleVideoClick(videos.familyLink)}>Assistir</button>
                </Card>
                <Card>
                  <MolduraImg>
                    <Img src={Images.KidLogger} alt="" />
                    </MolduraImg>
                <Description>Ferramenta simples que permite monitorar a atividade das crianças em dispositivos móveis e computadores.</Description>
                <button onClick={() => handleVideoClick(videos.kidLogger)}>Assistir</button>
                </Card>
                <Card>
                  <MolduraImg>
                    <Img src={Images.Qustodio} alt="" />
                  </MolduraImg>
                <Description>Solução que ajuda a bloquear conteúdo adulto e inapropriado em qualquer dispositivo conectado à internet.</Description>
                <button onClick={() => handleVideoClick(videos.qustodio)}>Assistir</button>
                </Card>
                <Card>
                  <MolduraImg>
                    <Img src={Images.FamilyShield} alt="" />
                    </MolduraImg>
                <Description>Permite monitorar a atividade online, bloquear conteúdo inapropriado e definir limites de tempo.</Description>
                <button onClick={() => handleVideoClick(videos.familyLink)}>Assistir</button>
                </Card>
              </CardContainer>
          </ControlContent>
          {showVideo && (
  <Overlay onClick={handleCloseVideo}>
    {/* <NuvemOverlay src={Images.NuvemOpacity} alt="" />
    <NuvemOverlayIII src={Images.NuvemOpacity} alt="" />
    <NuvemOverlayIV src={Images.NuvemOpacity} alt="" /> */}
    <div>
        <video width="600" height="355" autoPlay controls>
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
    </div>
        {/* <NuvemOverlayII src={Images.NuvemOpacity} alt="" /> */}
  </Overlay>
)}
        
        </MainContainer>
    </>
  );
};

export default ParentalControl;
