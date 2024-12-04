import { Images } from "../../assets/images.jsx";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import OceanDecorations from '../MainContent/OceanDecorations/OceanDecorations.jsx'
import { CardsContainer, Card, CardTitle, CardPlans, Plan, Img, CardButton } from './SignatureCards.styles.js'
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

  const isLoggedin = localStorage.getItem('isLoggedIn') === 'true'
  console.log(isLoggedin)
  
  return (
        <>
        <CardsContainer id="planos">
          <Card ref={planCard1}>
            <CardTitle>AVENTURA GRATUITA</CardTitle>
            <CardPlans>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO LIMITADO AOS JOGOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO BÁSICO ÁREA RESPONSÁVEL</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO A TUTORIAIS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AOS RESULTADOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AO CHATBOT</p>
                </Plan>

              </CardPlans>
              {isLoggedin ? (
                <Link to='/payment-page'>  {/* Criar a tela de pagamento */}
                  <CardButton>ACESSE</CardButton>
                </Link>
              ) : (
                (
                <Link to='/login'>
                  <CardButton>ACESSE</CardButton>
                </Link>
              )
              )}
               <Link to='/payment-page'>  {/* Criar a tela de pagamento */}
                  <CardButton>ACESSE</CardButton>
                </Link>
            {/* ---------------------------------- */}
          </Card>
          <Card ref={planCard2}>
            <CardTitle>AVENTURA INTENSA</CardTitle>
            <CardPlans>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO LIMITADO AOS JOGOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO BÁSICO ÁREA RESPONSÁVEL</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO A TUTORIAIS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AOS RESULTADOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AO CHATBOT</p>
                </Plan>

              </CardPlans>
              <Link to='/payment-page'>  {/* Criar a tela de pagamento */}
                  <CardButton>ASSINAR</CardButton>
                </Link>
            </Card>
          <Card ref={planCard3}>
            <CardTitle>AVENTURA IMERSIVA</CardTitle>
            <CardPlans>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO LIMITADO AOS JOGOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO BÁSICO ÁREA RESPONSÁVEL</p>
                </Plan>
                <Plan>
                  <Img src={Images.uncheck} alt="Icon accesso" />
                  <p>ACESSO A TUTORIAIS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AOS RESULTADOS</p>
                </Plan>
                <Plan>
                  <Img src={Images.check} alt="Icon sem accesso" />
                  <p>ACESSO AO CHATBOT</p>
                </Plan>

              </CardPlans>
              <Link to='/payment-page'>  {/* Criar a tela de pagamento */}
                  <CardButton>ASSINAR</CardButton>
                </Link>
            </Card>
        </CardsContainer>
        <OceanDecorations/>
    </>
  );
};

export default SignatureCard;
