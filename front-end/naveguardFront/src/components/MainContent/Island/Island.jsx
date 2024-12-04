import { Images, Videos } from "../../../assets/images";
import { useState,useRef, useEffect } from "react";
import { IslandContainer, Beach } from './IslandContainer.styles';
import { utilScrollReveal } from "../../../utils/ScrollReveal";
import { Overlay } from '../../../pages/ParentalControl/ParentalControl.styles'

function Island() {
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
  
    const handleVideoClick = (url) => {
      setVideoUrl(url)
      setShowVideo(true);
    };
  
    const handleCloseVideo = () => {
      setShowVideo(false);
      setVideoUrl("");
    };
  
    const MainSection = useRef(null)

    useEffect(() => {
        utilScrollReveal(MainSection)
    },[])
    return (
        <>
            <IslandContainer>
                <Beach onClick={() => handleVideoClick()}>
                    {/* <img src={Images.TrailerNaveguard} alt="" /> */}
                    <img ref={MainSection} src={Images.Island} alt="beach" width={"100%"} />
                </Beach>
                {showVideo && (
  <Overlay onClick={handleCloseVideo}>
    <div>
        <video width="600" height="355" autoPlay controls>
          <source src={Videos.KidLoggerVideo} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
    </div>
        {/* <NuvemOverlayII src={Images.NuvemOpacity} alt="" /> */}
  </Overlay>
)}
            </IslandContainer>
        </>
    );
}


export default Island

