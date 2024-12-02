import Footer from '../../components/footer/Footer';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Images } from "../../assets/images";
import Header from "../../components/Header/Header";
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { ErrorContainer, ErrorContent, Img, Sea, Return } from "./NotFound.styles";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <LoadingComponent isLoading={isLoading} />
      <Header />
      <ErrorContainer>
        <ErrorContent>
          <Img src={Images.NotFound2} alt="Página não encontrada" />
          <Sea>
            <Return onClick={handleClick}>Voltar à Página Inicial</Return>
          </Sea>
        </ErrorContent>
      </ErrorContainer>
      <Footer />
    </>
  );
};

export default NotFound;
