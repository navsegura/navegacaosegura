import Footer from '../../components/footer/Footer'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Images } from "../../assets/images";
import Header from "../../components/Header/Header";
import { ErrorContainer,
  ErrorContent,
  Img,
  Sea,
  Return, Loading
} from "./NotFound.styles";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 500);
  };
  return (
    <>
      {isLoading ? (
        <Loading>
            <ThreeDot color="#F46A00" size="large" text="" textColor="" />
        </Loading>
        
      ) : (
        <>
          <Header />
          <ErrorContainer>
            <ErrorContent>
              <Img
                src={Images.NotFound2}
                alt="Página não encontrada"
                width={800}
              />
              <Sea>
                  <Return onClick={handleClick}>Voltar à Página Inicial</Return>
              </Sea>
              {/* <Footer/> */}
            </ErrorContent>
          </ErrorContainer>
          <Footer/>
        </>
      )}
    </>
  );
};
export default NotFound;
