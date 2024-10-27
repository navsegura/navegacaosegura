import { Images } from "../../assets/images.jsx";
import { useRef, useEffect } from "react";
import OceanDecorations from '../MainContent/OceanDecorations/OceanDecorations.jsx'
import { CardsContainer, Card, CardTitle, CardContent, CardIcons, CardButton, CardBenefits } from './SignatureCards.styles.js'
import { utilScrollRevealDelayBottom1, utilScrollRevealDelayBottom2, utilScrollRevealDelayBottom3 } from "../../utils/ScrollReveal.js";

const SignatureCard = () => {
  const planCard1 = useRef(null);
  const planCard2 = useRef(null);
  const planCard3 = useRef(null);

  useEffect(() => {
    utilScrollRevealDelayBottom1(planCard1);
    utilScrollRevealDelayBottom2(planCard2);
    utilScrollRevealDelayBottom3(planCard3);
  }, []);

  return (
        <>
        <CardsContainer id="planos">
          <Card ref={planCard1}>
            <CardTitle>
              <h1>AVENTURA GRATUITA</h1>
            </CardTitle>
            <CardIcons>
                <img src={Images.uncheck} alt="Icon accesso" />
                <img src={Images.uncheck} alt="Icon accesso" />
                <img src={Images.uncheck} alt="Icon accesso" />
                <img src={Images.check} alt="Icon sem accesso" />
                <img src={Images.check} alt="Icon sem accesso" />
              </CardIcons>
            <CardContent>
                <CardBenefits>ACESSO LIMITADO AOS JOGOS</CardBenefits>
                <CardBenefits>ACESSO BÁSICO ÁREA RESPONSÁVEL</CardBenefits>
                <CardBenefits>ACESSO A TUTORIAIS</CardBenefits>
                <CardBenefits>ACESSO AOS RESULTADOS</CardBenefits>
                <CardBenefits>ACESSO AO CHATBOT</CardBenefits>
              <CardButton>ACESSE</CardButton>
            </CardContent>
          </Card>
          <Card ref={planCard2}>
            <CardTitle>
              <h1>AVENTURA INTENSA</h1>
            </CardTitle>
            <CardIcons>
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.check} alt="Icon sem accesso" />
              <img src={Images.check} alt="Icon sem accesso" />
            </CardIcons>
            <CardContent>
              <CardBenefits>ACESSO LIMITADO AOS JOGOS</CardBenefits>
              <CardBenefits>ACESSO BÁSICO ÁREA RESPONSÁVEL</CardBenefits>
              <CardBenefits>ACESSO A TUTORIAIS</CardBenefits>
              <CardBenefits>ACESSO AOS RESULTADOS</CardBenefits>
              <CardBenefits>ACESSO AO CHATBOT</CardBenefits>
              <CardButton>ASSINAR</CardButton>
            </CardContent>
          </Card>
          <Card ref={planCard3}>
            <CardTitle>
              <h1>AVENTURA IMERSIVA</h1>
            </CardTitle>
            <CardIcons>
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.uncheck} alt="Icon accesso" />
              <img src={Images.check} alt="Icon sem accesso" />
              <img src={Images.check} alt="Icon sem accesso" />
            </CardIcons>
            <CardContent>
              <CardBenefits>ACESSO LIMITADO AOS JOGOS</CardBenefits>
              <CardBenefits>ACESSO BÁSICO ÁREA RESPONSÁVEL</CardBenefits>
              <CardBenefits>ACESSO A TUTORIAIS</CardBenefits>
              <CardBenefits>ACESSO AOS RESULTADOS</CardBenefits>
              <CardBenefits>ACESSO AO CHATBOT</CardBenefits>
              <CardButton>ASSINAR</CardButton>
            </CardContent>
          </Card>
        </CardsContainer>
        <OceanDecorations/>
    </>
  );
};

export default SignatureCard;
